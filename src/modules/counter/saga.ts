import { put } from 'redux-saga/effects'
import { increase, decrease } from './actions'

export function* increaseSaga() {
  yield put(increase()) // 리듀서에게 액션을 디스패치 함
}

export function* decreaseSaga() {
  yield put(decrease()) // 리듀서에게 액션을 디스패치 함
}
