import { Maybe, MicrocmsUserinfoAvatar, Scalars } from './graphql-types'

export type UserinfoType = {
  id: Scalars['ID']
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  publishedAt?: Maybe<Scalars['Date']>
  name?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  birthday?: Maybe<Scalars['Date']>
  address?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  greetingText?: Maybe<Scalars['String']>
  avatar?: Maybe<MicrocmsUserinfoAvatar>
}
