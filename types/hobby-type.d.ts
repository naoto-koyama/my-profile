import {
  Maybe,
  MicrocmsHobbies,
  MicrocmsHobbiesImages,
  MicrocmsHobbiesImagesImage,
} from './graphql-types'

export type HobbyType = Pick<
  MicrocmsHobbies,
  'id' | 'hobbyName' | 'description' | 'favorite' | 'images'
>
