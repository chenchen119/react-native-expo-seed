import { createStore, applyMiddleware } from 'redux' //use default redux createstore for now
import createSagaMiddleware from 'redux-saga'
//import ReduxThunk from 'redux-thunk';


export default (rootReducer, rootSaga) => {



  const sagaMiddleware = createSagaMiddleware()
  const store = createStore( rootReducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(rootSaga)

  return store;
}
