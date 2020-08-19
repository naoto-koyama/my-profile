import * as React from 'react'
import { useReducer } from 'react'
import { HobbyType } from '../../types/hobby-type'
import MicroCmsImage from './micro-cms-image'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
const styles = require('./hobby-card.module.scss')

interface HobbyCardState {
  selectedImageIndex: number
}

interface HobbyCardAction {
  type: ActionType
  payload: HobbyCardState
}

enum ActionType {
  SET_IMAGE_INDEX = 'SET_IMAGE_INDEX',
}

const initialState = { selectedImageIndex: 0 }

const reducer: React.Reducer<HobbyCardState, HobbyCardAction> = (
  state: HobbyCardState,
  action: HobbyCardAction
) => {
  switch (action.type) {
    case ActionType.SET_IMAGE_INDEX:
      return {
        ...state,
        selectedImageIndex: action.payload.selectedImageIndex,
      }
    default:
      throw new Error()
  }
}

type Props = {
  hobby: HobbyType
}

const HobbyCard: React.FC<Props> = ({ hobby }) => {
  const hobbyImages = hobby?.images || []
  const imageCount = hobbyImages.length
  const hobbyImageUrls = hobbyImages.map(_image =>
    _image && _image.image && _image.image.url ? _image.image.url : 'dummy.png'
  )

  const [state, dispatch] = useReducer(reducer, initialState)
  const clickImageIcon = (value: number): void => {
    dispatch({
      type: ActionType.SET_IMAGE_INDEX,
      payload: { ...state, selectedImageIndex: value },
    })
  }

  const clickPrevIcon = (): void => {
    const value =
      state.selectedImageIndex === 0
        ? imageCount - 1
        : state.selectedImageIndex - 1
    dispatch({
      type: ActionType.SET_IMAGE_INDEX,
      payload: { ...state, selectedImageIndex: value },
    })
  }

  const clickNextIcon = (): void => {
    const value =
      state.selectedImageIndex === imageCount - 1
        ? 0
        : state.selectedImageIndex + 1
    dispatch({
      type: ActionType.SET_IMAGE_INDEX,
      payload: { ...state, selectedImageIndex: value },
    })
  }

  return (
    <div className={styles.hobbyCard}>
      <div className={styles.hobbyCard__image}>
        <ul className={styles.imageList}>
          {hobbyImageUrls.map((url, index) => {
            return (
              <li
                className={`${styles.imageList__item} ${
                  index === state.selectedImageIndex ? styles.active : ''
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
                  index !== state.selectedImageIndex ? styles.notActive : ''
                }`}
                onClick={(): void => clickImageIcon(index)}
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
