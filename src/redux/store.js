import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';

export default function configureStore(initialState = {}) {
  const enhancedMiddleware =
    compose(
      applyMiddleware(
        createEpicMiddleware(rootEpic),
      ), window.devToolsExtension ? window.devToolsExtension() : (f) => { return f; },
    );

  const store = createStore(
    rootReducer,
    initialState,
    enhancedMiddleware,
  );

  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      return store.replaceReducer(rootReducer);
    });
  }

  return store;
}
