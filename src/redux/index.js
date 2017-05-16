import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import configureStore from './CreateStore'
import rootSaga from '../sagas/'


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    login: require('./LoginRedux').reducer,
    form : formReducer
  })
  return configureStore(rootReducer, rootSaga)
}
