import React from 'react'
import styles from './Footer.module.scss'
import logo from '@/assets/Global/logo.svg'
import { RiMailLine, RiMapPin2Line } from 'react-icons/ri'
import { MdOutlineLocalPhone } from 'react-icons/md'
import { dataFooter } from './data'

const Footer: React.FC = () => {
  const language = 'ES' // Cambiar a 'EN' según el idioma deseado
  const { contact, sitemap, copyright } = dataFooter[language]

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.logo}>
          <img src={logo} alt="IFICS Logo" />
          <div className={styles.divider} />
          <span>Instituto de Facilitación del Comercio Sostenible</span>
        </div>

        <div className={styles.footer__topContent}>
          <div className="w-full flex flex-col items-start gap-4">
            <div className={styles.title}>{contact.title}</div>
            <div className={styles.contacList}>
              <div className={styles.listItem}>
                <div className={styles.icon}>
                  <RiMapPin2Line />
                </div>
                <span>{contact.address}</span>
              </div>
              <div className={styles.listItem}>
                <div className={styles.icon}>
                  <MdOutlineLocalPhone />
                </div>
                <span>{contact.phone}</span>
              </div>
              <div className={styles.listItem}>
                <div className={styles.icon}>
                  <RiMailLine />
                </div>
                <span>{contact.email}</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-6">
            <div className={styles.title}>{sitemap.title}</div>
            <div className="grid grid-cols-2 gap-4 w-full text-left">
              {sitemap.links.map((link, index) => (
                <div key={index} className="">
                  <a className="text-white" href={link.url}>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
