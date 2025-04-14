import styles from './ComercioInternacional.module.scss'
import listCheck from '../../assets/Home/listCheck.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface ComercioInternacionalProps {
  title: string
  titleTwo: string
  description: string
  items: string[]
}

export const ComercioInternacional = ({
  title,
  titleTwo,
  description,
  items,
}: ComercioInternacionalProps) => {
  return (
    <div className={styles.comercioInternacional}>
      <div className={styles.comercioInternacional__container}>
        <div className={styles.comercioInternacional__heading}>
          <h2 className={styles.comercioInternacional__title}>{title}</h2>
          <h2 className={styles.comercioInternacional__titleTwo}>{titleTwo}</h2>
          <p className={styles.comercioInternacional__description}>
            {description}
          </p>
        </div>
        <ul className={styles.comercioInternacional__items}>
          {items.map((item, index) => (
            <li key={index} className={styles.comercioInternacional__item}>
              <LazyLoadImage
                src={listCheck}
                alt={title}
                className={styles.image}
                effect="blur"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
