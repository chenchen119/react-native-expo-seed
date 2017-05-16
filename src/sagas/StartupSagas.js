import { put, call, take} from 'redux-saga/effects'
import LoginActions from '../redux/LoginRedux'
import firebase from 'firebase'
import { eventChannel } from 'redux-saga'

// process STARTUP actions
export function * startup () {

    console.log('checking')

    const channel = yield call(authChannel)

    while(true) {
      const { error, user } = yield take(channel);

      if (user) yield put(LoginActions.loginSuccess(user));
      else yield put(LoginActions.loginFailure(error))}
}


function authChannel () {
  if (this._authChannel) return this._authChannel

  // const auth = this.app.auth()
  const channel = eventChannel(emit => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error })
    )

    return unsubscribe
  })

  this._authChannel = channel
  return channel
}
