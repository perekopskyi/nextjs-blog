import Head from 'next/head'

import Layout from '../../components/layout'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'

export default function Post({
  postData,
}: {
  postData: {
    title: string
    id: number
    body: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      Post {postData.id}. {postData.title}
      <br />
      <br />
      {postData.body}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}
