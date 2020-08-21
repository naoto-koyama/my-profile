import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Profile from '../components/profile'
import SEO from '../components/seo'
import { AboutQuery } from '../../types/graphql-types'
import ProfileText from '../components/profileText'
import Twitter from '../components/twitter'
import HobbyCard from '../components/hobby-card'
const styles = require('./about.module.scss')

type Props = {
  data: AboutQuery
}

const AboutPage: React.FC<Props> = ({ data }) => {
  const userInfo = data.UserInfo.edges[0].node
  const Hobbies = data.Hobbies.edges.map(edge => edge.node).reverse()
  return (
    <Layout title={'ABOUT'}>
      <SEO title="ABOUT" />
      <Profile profileData={userInfo}></Profile>
      <ProfileText greetingText={userInfo.greetingText}></ProfileText>
      <h2 className={styles.title}>Hobby</h2>
      <ul className={styles.hobbyList}>
        {Hobbies.map(hobby => {
          return (
            <li className={styles.hobbyList__item} key={hobby.id}>
              <HobbyCard hobby={hobby}></HobbyCard>
            </li>
          )
        })}
      </ul>
      <Twitter></Twitter>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query About {
    UserInfo: allMicrocmsUserinfo {
      edges {
        node {
          id
          name
          address
          birthday
          email
          greetingText
          role
          avatar {
            url
          }
        }
      }
    }
    Hobbies: allMicrocmsHobbies {
      edges {
        node {
          id
          hobbyName
          description
          favorite
          images {
            id
            image {
              url
            }
          }
        }
      }
    }
  }
`
