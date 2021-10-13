import { INCREASE, DECREASE, CounterActionType } from './actions'

// 초기 상태
const initialState = 0

// 리듀서
const counter = (
  state: number = initialState,
  action: CounterActionType,
): number => {
  switch (action.type) {
    case INCREASE:
      return state + 1
    case DECREASE:
      return state - 1
    default:
      return state
  }
}

export default counter
