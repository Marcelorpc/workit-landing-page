import styles from './Header.module.css'

import workitLogo from '../assets/workit-logo.svg'
import smartphoneIllustration from '../assets/smartphone-illustration.svg'

export function Header() {
  return (
    <header>
      <nav>
        <img src={workitLogo} alt="Workit Logo" />
        <a href="#site">
          Apply for access
        </a>
      </nav>

      <div className={styles.mainTitle}>
        <h1>Data <span>tailored</span> to your needs.</h1>

        <button className={styles.mainButton}>Learn more</button>
      </div>

      <img className={styles.smartphone} src={smartphoneIllustration} alt="an illustration of a smartphone" />
    </header>
  )
}