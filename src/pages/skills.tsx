import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { SkillPageQuery } from '../../types/graphql-types'
import SkillCard from '../components/skill-card'
const styles = require('./skills.module.scss')

type Props = {
  data: SkillPageQuery
}

const SkillsPage: React.FC<Props> = ({ data }) => {
  const skills = data.Skills.edges.map(edge => edge.node)
  const otherSkills = data.OtherSkills.edges.map(edge => edge.node)
  return (
    <Layout title="SKILLS">
      <SEO title="SKILLS" />
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.skillsWrapper}>
        <ul className={styles.skillList}>
          {skills.map(skill => {
            return (
              <li className={styles.skillList__item} key={skill.id}>
                <div className={styles.skillCard}>
                  <SkillCard skill={skill}></SkillCard>
                </div>
                <div className={styles.skillDetail}>{skill.skillDetail}</div>
              </li>
            )
          })}
        </ul>
      </div>

      <h2 className={styles.title}>OTHER SKILLS</h2>
      <ul className={styles.otherSkillList}>
        {otherSkills.map(skill => {
          return (
            <li className={styles.otherSkillList__item} key={skill.id}>
              <span>#{skill.skillName}</span>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default SkillsPage

export const query = graphql`
  query SkillPage {
    Skills: allMicrocmsSkills(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          id
          skillName
          skillLevel
          skillDetail
        }
      }
    }
    OtherSkills: allMicrocmsOtherskills(
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          skillName
        }
      }
    }
  }
`
