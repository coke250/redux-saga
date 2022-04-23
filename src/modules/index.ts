import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import counter, { increaseSaga, decreaseSaga } from './counter'
import dog from './dog'

const rootReducer = combineReducers({
  counter,
  dog,
})

export function* rootSaga() {
  yield all([increaseSaga(), decreaseSaga()])
}

export type RootReducerType = ReturnType<typeof rootReducer>

export default rootReducer
