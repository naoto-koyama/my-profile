import * as React from 'react'
import { useState } from 'react'
import { HobbyType } from '../../types/hobby-type'
import MicroCmsImage from './micro-cms-image'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
const styles = require('./hobby-card.module.scss')

type Props = {
  hobby: HobbyType
  children?: never
}

const HobbyCard: React.FC<Props> = ({ hobby }) => {
  const hobbyImages = hobby?.images || []
  const imageCount = hobbyImages.length
  const hobbyImageUrls = hobbyImages.map(_image =>
    _image && _image.image && _image.image.url ? _image.image.url : 'dummy.png'
  )

  const [selectedImageIndex, setImageIndex] = useState(0)

  const clickPrevIcon = (): void => {
    selectedImageIndex === 0
      ? setImageIndex(imageCount - 1)
      : setImageIndex(selectedImageIndex - 1)
  }

  const clickNextIcon = (): void => {
    selectedImageIndex === imageCount - 1
      ? setImageIndex(0)
      : setImageIndex(selectedImageIndex + 1)
  }

  return (
    <div className={styles.hobbyCard}>
      <div className={styles.hobbyCard__image}>
        <ul className={styles.imageList}>
          {hobbyImageUrls.map((url, index) => {
            return (
              <li
                className={`${styles.imageList__item} ${
                  index === selectedImageIndex ? styles.active : ''
                }`}
                key={url}
              >
                <FaChevronCircleLeft
                  className={`${styles.navigationCircle} ${styles.left}`}
                  onClick={(): void => clickPrevIcon()}
                ></FaChevronCircleLeft>
                <FaChevronCircleRight
                  className={`${styles.navigationCircle} ${styles.right}`}
                  onClick={(): void => clickNextIcon()}
                ></FaChevronCircleRight>
                <MicroCmsImage
                  url={url}
                  alt="hobbyImage"
                  key={url}
                ></MicroCmsImage>
              </li>
            )
          })}
        </ul>
        <ul className={styles.imageIconList}>
          {hobbyImageUrls.map((_, index) => {
            return (
              <li
                key={index}
                className={`${styles.imageIconList__item} ${
                  index !== selectedImageIndex ? styles.notActive : ''
                }`}
                onClick={(): void => setImageIndex(index)}
              ></li>
            )
          })}
        </ul>
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
