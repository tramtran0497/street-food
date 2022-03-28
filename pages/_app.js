import { Layout } from '../Components/Layout'
import '../styles/globals.css'
import {ThemeProvider} from "../ReactHooks/ThemeContext"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
      </div>
    </ThemeProvider> 
  )
}

export default MyApp
