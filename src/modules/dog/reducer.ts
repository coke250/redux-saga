import {
  REQUESTED_DOG,
  REQUESTED_DOG_SUCCEEDED,
  REQUESTED_DOG_FAILED,
  DogActionType,
} from './actions'

export interface DogState {
  url: string
  loading: boolean
  error: boolean
}

const initialState: DogState = {
  url: '',
  loading: false,
  error: false,
}

const dog = (
  state: DogState = initialState,
  action: DogActionType,
): DogState => {
  switch (action.type) {
    case REQUESTED_DOG:
      return {
        url: '',
        loading: true,
        error: false,
      }
    case REQUESTED_DOG_SUCCEEDED:
      return {
        url: action.payload,
        loading: false,
        error: false,
      }

    case REQUESTED_DOG_FAILED:
      return {
        url: '',
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export default dog
