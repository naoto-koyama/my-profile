import * as React from 'react'
import Layout from '../components/layout'
import Profile from '../components/profile'
import SEO from '../components/seo'

const IndexPage: React.FC = () => (
  <Layout title={'OVERVIEW'}>
    <SEO title="OVERVIEW" />
    <Profile></Profile>
  </Layout>
)

export default IndexPage
