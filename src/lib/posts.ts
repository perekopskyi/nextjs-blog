import axios from 'axios'

const API = 'https://simple-blog-api.crew.red/posts'

export async function getAllPosts() {
  const res = await axios.get(API)
  return res.data
}

type Post = {
  id: number
  title: string
  body: string
}

export async function getAllPostsIds() {
  const res = await axios.get(API)
  return res.data.map((post: Post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    }
  })
}

export async function getPostData(id: string) {
  const res = await axios.get(`${API}/${id}`)
  return res.data
}
