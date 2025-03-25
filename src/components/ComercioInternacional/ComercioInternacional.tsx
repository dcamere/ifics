import styles from './ComercioInternacional.module.scss'
import listCheck from '../../assets/Home/listCheck.svg'

interface ComercioInternacionalProps {
  title: string
  titleTwo: string
  description: string
  items: string[]
}

export const ComercioInternacional = ({ title, titleTwo, description, items }: ComercioInternacionalProps) => {
  return (
    <div className={styles.comercioInternacional__container}>
      <h2 className={styles.comercioInternacional__title}>{title}</h2>
      <h2 className={styles.comercioInternacional__titleTwo}>{titleTwo}</h2>
      <p className={styles.comercioInternacional__description}>{description}</p>
      <ul className={styles.comercioInternacional__items}>
        {items.map((item, index) => (
          <li key={index} className={styles.comercioInternacional__item}>
            <img src={listCheck} alt="check icon" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
