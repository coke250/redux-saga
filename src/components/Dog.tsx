import { useDispatch, useSelector } from 'react-redux'
import { RootReducerType } from '../modules'
import { requestDog, requestDogError, requestDogSuccess } from '../modules/dog'

const Dog = () => {
  const dispatch = useDispatch()
  const { url, loading, error } = useSelector(
    (state: RootReducerType) => state.dog,
  )

  const fetchDog = async () => {
    try {
      dispatch(requestDog())
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      return dispatch(requestDogSuccess(data))
    } catch (error) {
      return dispatch(requestDogError())
    }
  }

  return (
    <div>
      <button onClick={() => fetchDog()}>Show Dog</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error, try again</p>
      ) : (
        <p>
          <img src={url} alt="" />
        </p>
      )}
    </div>
  )
}

export default Dog
