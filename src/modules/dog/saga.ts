import { call, put, takeEvery } from 'redux-saga/effects'
import {
  DogData,
  FETCH_DOG,
  requestDog,
  requestDogError,
  requestDogSuccess,
} from './actions'

export function* watchFetchDog() {
  yield takeEvery(FETCH_DOG, fetchDogAsync)
}

export function* fetchDogAsync() {
  try {
    yield put(requestDog())

    const data: DogData = yield call(async () => {
      return await fetch('https://dog.ceo/api/breeds/image/random').then(
        (res) => {
          return res.json()
        },
      )
    })
    yield put(requestDogSuccess(data))
  } catch (error) {
    yield put(requestDogError())
  }
}
