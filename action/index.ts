import axios from 'axios'
import { ADD_POST, SEND_POST } from '../constants'

// export functions
export function addPost(title: string, body: string) {
  console.log('title:, body: ', title, body)
  return {
    type: ADD_POST,
    payload: { title, body },
  }
}

export const sendPost = (title: string, body: string) => {
  return {
    type: SEND_POST,
    payload: {
      title,
      body,
    },
    callAPI: `https://simple-blog-api.crew.red/posts`,
  }
}
