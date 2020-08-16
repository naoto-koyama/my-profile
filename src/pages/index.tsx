import * as React from 'react'
import Layout from '../components/layout'
import Profile from '../components/profile'
import SEO from '../components/seo'
import { UserInfoQuery } from '../../types/graphql-types'
import { graphql } from 'gatsby'
import ProfileText from '../components/profileText'
import Twitter from '../components/twitter'

type Props = {
  data: UserInfoQuery
}

const IndexPage: React.FC<Props> = ({ data }) => (
  <Layout title={'OVERVIEW'}>
    <SEO title="OVERVIEW" />
    <Profile data={data}></Profile>
    <ProfileText
      greetingText={data.allMicrocmsUserinfo.edges[0].node.greetingText}
    ></ProfileText>
    <Twitter></Twitter>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query UserInfo {
    allMicrocmsUserinfo {
      edges {
        node {
          address
          avatar {
            url
          }
          birthday
          createdAt
          email
          greetingText
          id
          name
          role
          updatedAt
        }
      }
    }
  }
`
