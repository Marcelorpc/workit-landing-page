import styles from './Footer.module.css'

import workitLogo2 from '../assets/workit-logo-2.svg'
import facebookLogo from '../assets/facebook-logo.svg'
import twitterLogo from '../assets/twitter-logo.svg'
import instagramLogo from '../assets/instagram-logo.svg'

export function Footer() {
  return (
    <footer>
      <img src={workitLogo2} alt="Logo da Workit" />

      <nav>
        <ul className={styles.linksList}>
          <li>
            <a href="#site" target='_blank'>
              <img src={facebookLogo} alt="Logo do facebook" />
            </a>
          </li>

          <li>
            <a href="#site" target='_blank'>
              <img src={twitterLogo} alt="Logo do twitter" />
            </a>
          </li>

          <li>
            <a href="#site" target='_blank'>
              <img src={instagramLogo} alt="Logo do instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}