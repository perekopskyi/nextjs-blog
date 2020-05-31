import { SEND_POST, START, SUCCESS, FAIL } from '../constants'
import Axios from 'axios'
import { Store, Dispatch } from 'redux'

interface Action {
  type: typeof SEND_POST
  payload: object
  callAPI: string
}

export default (store: any) => (next: any) => (action: any) => {
  const { callAPI, type, payload, ...rest } = action
  console.log('payload: ', payload)
  if (!callAPI) return next(action)

  next({
    type: type + START,
    ...rest,
  })

  Axios.post(callAPI, payload)
    .then((response) => {
      console.log('response: ', response)
      response.data
    })
    .then((data) => next({ type: type + SUCCESS, ...rest, data }))
    .catch((error) => next({ type: type + FAIL, ...rest, error }))
}
