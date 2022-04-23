export const REQUESTED_DOG = 'REQUESTED_DOG' as const
export const REQUESTED_DOG_SUCCEEDED = 'REQUESTED_DOG_SUCCEEDED' as const
export const REQUESTED_DOG_FAILED = 'REQUESTED_DOG_FAILED' as const

export interface DogData {
  message: string
}

export const requestDog = () => ({ type: REQUESTED_DOG })
export const requestDogSuccess = (data: DogData) => ({
  type: REQUESTED_DOG_SUCCEEDED,
  payload: data.message,
})
export const requestDogError = () => ({ type: REQUESTED_DOG_FAILED })

export type DogActionType =
  | ReturnType<typeof requestDog>
  | ReturnType<typeof requestDogSuccess>
  | ReturnType<typeof requestDogError>
