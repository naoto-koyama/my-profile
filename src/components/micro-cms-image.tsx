import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

type Props = {
  url?: string | null
  alt: string
  children?: never
}

const MicroCmsImage: React.FC<Props> = ({ url, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const dummyImage = data.images.edges.find(n =>
    n.node.relativePath.includes('dummy.png')
  )
  return url ? (
    <img src={url} alt={alt} />
  ) : (
    <Img fluid={dummyImage.node.childImageSharp.fluid} alt={alt} />
  )
}

export default MicroCmsImage
