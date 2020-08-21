import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Profile from '../components/profile'
import SEO from '../components/seo'
import { OverviewQuery } from '../../types/graphql-types'
import ProfileText from '../components/profileText'
import Twitter from '../components/twitter'
import SkillCard from '../components/skill-card'
import CareerCard from '../components/career-card'
const styles = require('./index.module.scss')

type Props = {
  data: OverviewQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const userInfo = data.UserInfo.edges[0].node
  const skills = data.Skills.edges.map(edge => edge.node).reverse()
  const careers = data.Careers.edges.map(edge => edge.node).reverse()
  return (
    <Layout title="OVERVIEW">
      <SEO title="OVERVIEW" />
      <Profile profileData={userInfo} isPositionRelative={true}></Profile>
      <ProfileText greetingText={userInfo.greetingText}></ProfileText>
      <Twitter></Twitter>
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.skillsWrapper}>
        <ul className={styles.skillsList}>
          {skills.map(skill => {
            return (
              <li className={styles.skillsList__item} key={skill.id}>
                <SkillCard skill={skill}></SkillCard>
              </li>
            )
          })}
        </ul>
        <Link className={styles.skillDetailLink} to="/skills">
          And More
        </Link>
      </div>
      <h2 className={styles.title}>Career</h2>
      <ul className={styles.careerList}>
        {careers.map((career, index) => {
          return (
            <li
              className={`${styles.careerList__item} ${
                (index + 1) % 2 === 0 ? styles.even : styles.odd
              }`}
              key={career.id}
            >
              <div className={styles.careerCardWrapper}>
                <CareerCard career={career}></CareerCard>
              </div>
            </li>
          )
        })}
      </ul>
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
    Careers: allMicrocmsCareers {
      edges {
        node {
          id
          fromDate
          toDate
          careerName
          role
          description
        }
      }
    }
  }
`
