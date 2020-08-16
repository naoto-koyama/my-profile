import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Profile from '../components/profile'
import SEO from '../components/seo'
import { OverviewQuery } from '../../types/graphql-types'
import ProfileText from '../components/profileText'
import Twitter from '../components/twitter'
import SkillCard from '../components/skill-card'
const styles = require('./index.module.scss')

type Props = {
  data: OverviewQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const userInfo = data.UserInfo.edges[0].node
  const skills = data.Skills.edges.map(edge => edge.node).reverse()
  return (
    <Layout title={'OVERVIEW'}>
      <SEO title="OVERVIEW" />
      <Profile profileData={userInfo}></Profile>
      <ProfileText greetingText={userInfo.greetingText}></ProfileText>
      <Twitter></Twitter>
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.skillsWrapper}>
        <ul className={styles.skillsList}>
          {skills.map(skill => {
            return (
              <li className={styles.skillsList__item} key={skill.id}>
                <SkillCard
                  skillName={skill.skillName}
                  skillLevel={skill.skillLevel}
                ></SkillCard>
              </li>
            )
          })}
        </ul>
        <Link className={styles.skillDetailLink} to="/skills">
          And More
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Overview {
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
    Skills: allMicrocmsSkills {
      edges {
        node {
          id
          skillName
          skillLevel
          skillDetail
        }
      }
    }
  }
`
