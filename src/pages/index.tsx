import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'

import { getAllPosts } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import { Section } from '../components/section'
import { Button } from '../components/button'

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
const Line = styled.hr`
  height: 2px;
  border-color: #0070f3;
  opacity: 0.3;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allPostsData = await getAllPosts()
  return {
    props: {
      allPostsData: allPostsData.reverse(),
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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <p>
          Hi, I'm Yevhenii. I'm web developer. It's my mini blog that uses open
          API. The following tools were involved in creating this application:
          Next JS, React, Redux, styled-components and axios
        </p>
      </Section>
      <Section>
        <Button>
          <Link href="/posts/new">
            <a>Add new post</a>
          </Link>
        </Button>
        <Line />
        <List>
          {allPostsData.map(({ id, title, body }) => {
            return (
              <ListItem key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>
                    Post {id}. {title}
                  </a>
                </Link>
                <br />
                <LightText>{cutPostBody(body)}</LightText>
              </ListItem>
            )
          })}
        </List>
      </Section>
    </Layout>
  )
}

const cutPostBody = (text: string): string => {
  if (text && text.length > 100) {
    return (text = text.substring(0, 99) + '...')
  }
  return text
}
