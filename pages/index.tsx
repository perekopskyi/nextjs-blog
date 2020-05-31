import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'

import { getAllPosts } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'

const HeadingMd = styled.section`
  .headingMd {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`

const HeadingMdWithPadding1px = styled(HeadingMd)`
  padding-top: 1px;
`

const HeadingLg = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  margin: 0 0 1.25rem;
`

const LightText = styled.small`
  color: #999;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allPostsData = await getAllPosts()
  console.log('allPostsData: ', allPostsData)
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    body: string
    title: string
    id: string
  }[]
}) {
  console.log('---allPostsData', allPostsData)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeadingMd>
        <p>
          Hi, I'm Yevhenii. I'm web developer. It's my mini blog that uses open
          API. The following tools were involved in creating this application:
          Next JS, React, Redux, styled-components and axios
        </p>
      </HeadingMd>
      <HeadingMdWithPadding1px>
        <HeadingLg>Blog</HeadingLg>
        <Link href="/posts/new">
          <a>Add post</a>
        </Link>
        <List>
          {allPostsData.map(({ id, title, body }) => {
            return (
              <ListItem key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <LightText>{cutPostBody(body)}</LightText>
              </ListItem>
            )
          })}
        </List>
      </HeadingMdWithPadding1px>
    </Layout>
  )
}

const cutPostBody = (text: string): string => {
  if (text && text.length > 100) {
    return (text = text.substring(0, 99) + '...')
  }
  return text
}
