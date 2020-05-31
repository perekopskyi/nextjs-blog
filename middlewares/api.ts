import { START, SUCCESS, FAIL } from '../constants'
import Axios from 'axios'

export default (store) => (next) => (action) => {
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
