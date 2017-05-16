import { put, call } from 'redux-saga/effects'
import LoginActions from '../redux/LoginRedux'
import  firebase  from 'firebase'


// attempts to login
export function * login ({email, password}) {
  try {
    //call() with context base implementation call([context, fn],...args)
    const user = yield call([firebase.auth(), firebase.auth().signInWithEmailAndPassword],email, password)
    yield put(LoginActions.loginSuccess(user))
  }
  catch(error) {
    yield put( LoginActions.loginFailure(error))
  }
}
