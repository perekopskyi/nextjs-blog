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
`

const HeaderHomeImageInBorderCircle = styled(HeaderHomeImage)`
  border-radius: 9999px;
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
`

const HeaderImageInBorderCircle = styled(HeaderImage)`
  border-radius: 9999px;
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

import Head from 'next/head'
import Link from 'next/link'

const name = 'Yevhenii Perekopskyi'
export const siteTitle = 'Next.js Sample Website'

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
        <meta name="description" content="Personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            <HeaderHomeImageInBorderCircle
              src="/images/avatar.jpg"
              alt={name}
            />
            <Heading2Xl>{name}</Heading2Xl>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <HeaderImageInBorderCircle
                  src="/images/avatar.jpg"
                  alt={name}
                />
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

/**

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

 */
