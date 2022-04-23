import { useDispatch, useSelector } from 'react-redux'
import { RootReducerType } from '../modules'
import { fetchDog } from '../modules/dog'

const Dog = () => {
  const dispatch = useDispatch()
  const { url, loading, error } = useSelector(
    (state: RootReducerType) => state.dog,
  )

  return (
    <div>
      <button onClick={() => dispatch(fetchDog())}>랜덤 강아지 사진</button>
      {loading ? (
        <p>로딩중...</p>
      ) : error ? (
        <p>에러가 발생하였습니다, 다시 시도해주세요.</p>
      ) : (
        <p>
          <img src={url} alt="" />
        </p>
      )}
    </div>
  )
}

export default Dog
