import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderHomeImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
`

const Heading2Xl = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

const HeaderImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
`

const HeadingLg = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`

const ColorInherit = styled.a`
  color: inherit;
`

const BackToHome = styled.div`
  margin: 3rem 0 0;
`

const name = 'Yevhenii Perekopskyi'
export const siteTitle = 'Next.js Sample blog'

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <Wrapper>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal blog using Next.js" />
      </Head>
      <Header>
        {home ? (
          <>
            <HeaderHomeImage src="/images/avatar.jpg" alt={name} />
            <Heading2Xl>{name}</Heading2Xl>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <HeaderImage src="/images/avatar.jpg" alt={name} />
              </a>
            </Link>
            <HeadingLg>
              <Link href="/">
                <ColorInherit>{name}</ColorInherit>
              </Link>
            </HeadingLg>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Wrapper>
  )
}
