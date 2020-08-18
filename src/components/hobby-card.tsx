import * as React from 'react'
import { HobbyType } from '../../types/hobby-type'
import MicroCmsImage from './micro-cms-image'
const styles = require('./hobby-card.module.scss')

type Props = {
  hobby: HobbyType
}

const HobbyCard: React.FC<Props> = ({ hobby }) => {
  const hobbyImages = hobby?.images || []
  const hobbyImageUrls = hobbyImages.map(_image =>
    _image && _image.image && _image.image.url ? _image.image.url : 'dummy.png'
  )

  return (
    <div className={styles.hobbyCard}>
      <div className={styles.hobbyCard__image}>
        <MicroCmsImage
          url={hobbyImageUrls[0]}
          alt={hobby.hobbyName || 'hobbyImage'}
        ></MicroCmsImage>
      </div>
      <div className={styles.hobbyCard__text}>
        <h3 className={styles.header}>{hobby.hobbyName}</h3>
        <p className={styles.hobbyDescription}>{hobby.description}</p>
        <h3 className={styles.header}>Favorite</h3>
        <p className={styles.favorite}>{hobby.favorite}</p>
      </div>
    </div>
  )
}

export default HobbyCard
