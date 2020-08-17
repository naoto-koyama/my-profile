import { Maybe, Scalars } from './graphql-types'

export type CareerType = {
  id: Scalars['ID']
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  publishedAt?: Maybe<Scalars['Date']>
  careerName?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  fromDate?: Maybe<Scalars['Date']>
  toDate?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  careersId?: Maybe<Scalars['String']>
}
