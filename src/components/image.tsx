import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

type Props = {
  filename: string
  alt: string
  className?: string
  children?: never
}

const Image: React.FC<Props> = ({ filename, alt, className }) => {
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

  const image = data.images.edges.find(n =>
    n.node.relativePath.includes(filename)
  )
  const dummyImage = data.images.edges.find(n =>
    n.node.relativePath.includes('dummy.png')
  )
  return image ? (
    <Img
      fluid={image.node.childImageSharp.fluid}
      alt={alt}
      className={`${className || ''}`}
    />
  ) : (
    <Img
      fluid={dummyImage.node.childImageSharp.fluid}
      alt={alt}
      className={`${className || ''}`}
    />
  )
}

export default Image
