import Head from 'next/head'

import Layout from '../../components/layout'
import Form from '../../components/form'

export default function New() {
  return (
    <Layout>
      <Head>
        <title>New post</title>
      </Head>
      <Form />
    </Layout>
  )
}
