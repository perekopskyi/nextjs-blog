import { ADD_POST, SEND_POST } from '../constants'

type Action = {
  type: string
  payload?: object
}

type State = {
  title: string
  body: string
}

const initialState = {
  title: '',
  body: '',
}

export default (statePosts: State = initialState, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_POST:
      return {
        ...statePosts,
        payload,
      }

    default:
      return statePosts
  }
}
