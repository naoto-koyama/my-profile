import { MicrocmsCareers } from './graphql-types'

export type CareerType = Pick<
  MicrocmsCareers,
  'id' | 'fromDate' | 'toDate' | 'careerName' | 'role' | 'description'
>
