import { MicrocmsSkills } from './graphql-types'

export type SkillType = Pick<
  MicrocmsSkills,
  'id' | 'skillName' | 'skillLevel' | 'skillDetail'
>
