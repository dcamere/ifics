import React from 'react'
import styles from './InnovacionYEficiencia.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export interface InnovacionYEficienciaProps {
  titleOne: string
  titleTwo: string
  text: string[]
  image1: string
  image2?: string
  secondBg?: "blue" | "orange"
}

const InnovacionYEficiencia: React.FC<InnovacionYEficienciaProps> = ({
  titleOne,
  titleTwo,
  text,
  image1,
  image2,
  secondBg
}) => {
  return (
    <div className={`${styles.section} ${secondBg ? styles[`section--${secondBg}`] : ''}`}>
      <div className={`${styles.section__container} ${secondBg ? styles[`section__container--${secondBg}`] : ''}`}>
        <div className={styles.content}>
          <h1 className={`${styles.title} ${secondBg ? styles[`title--${secondBg}`] : ''}`}>
            {titleOne}{' '}
            <span className={styles['title--accent']}>{titleTwo}</span>
          </h1>

          <div className={styles.text}>
            {text.map((val, i) => (
              <p key={i}>{val}</p>
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <LazyLoadImage className={styles['image--1']} src={image1} effect='blur' />
          {
            secondBg ? <div className={`${styles[`image--2`]} ${styles[`image--2--${secondBg}`]}`}></div> : <LazyLoadImage className={styles['image--2']} src={image2} effect="blur" />
          }
        </div>
      </div>
    </div>
  )
}

export default InnovacionYEficiencia
