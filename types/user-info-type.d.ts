import { MicrocmsUserinfo } from './graphql-types'

export type UserinfoType = Pick<
  MicrocmsUserinfo,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'role'
  | 'birthday'
  | 'address'
  | 'email'
  | 'greetingText'
  | 'avatar'
>
