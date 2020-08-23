import * as React from 'react'
import MicroCmsImage from './micro-cms-image'
import Balloon from './balloon'
import SnsList from './sns-list'
import { UserinfoType } from '../../types/user-info-type'
const styles = require('./profile.module.scss')

type Props = {
  profileData: UserinfoType
  isPositionRelative?: boolean
  children?: never
}

const Profile: React.FC<Props> = ({ profileData, isPositionRelative }) => {
  const calculateAge = (birthday: Date): number => {
    birthday = new Date(birthday)
    const today = new Date()
    const yearDiff = today.getFullYear() - birthday.getFullYear()
    const birthdayOfThisYear = new Date(
      today.getFullYear(),
      birthday.getMonth(),
      birthday.getDate()
    )
    return today < birthdayOfThisYear ? yearDiff - 1 : yearDiff
  }

  return (
    <div
      className={`${styles.profileInfoWrapper} ${
        isPositionRelative ? styles.positionRelative : ''
      }`}
    >
      <div className={styles.profileInfoContent}>
        <div className={styles.profileInfoContent__avatar}>
          {/* TODO: HireMeの画像をif文で差し込む */}
          <MicroCmsImage
            url={profileData.avatar?.url}
            alt="avatar"
          ></MicroCmsImage>
        </div>
        <div className={styles.profileInfoContent__description}>
          <div className={styles.balloonWrapper}>
            <Balloon text="HELLO"></Balloon>
          </div>
          <p className={styles.name}>{profileData.name}</p>
          <p className={styles.role}>{profileData.role}</p>
          <div className={styles.line}></div>
          <ul className={styles.infoList}>
            <li className={styles.infoList__item}>
              <span className={styles.infoList__item__key}>AGE</span>
              <span className={styles.infoList__item__value}>
                {calculateAge(profileData.birthday)}
              </span>
            </li>
            <li className={styles.infoList__item}>
              <span className={styles.infoList__item__key}>ADDRESS</span>
              <span className={styles.infoList__item__value}>
                {profileData.address}
              </span>
            </li>
            <li className={styles.infoList__item}>
              <span className={styles.infoList__item__key}>E-MAIL</span>
              <span className={styles.infoList__item__value}>
                {profileData.email}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.profileSns}>
        <SnsList color="white"></SnsList>
      </div>
    </div>
  )
}

export default Profile
