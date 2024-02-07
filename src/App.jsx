import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Content } from './components/Content'
import { Footer } from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App