import '../styles/globals.css'

import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Component {...pageProps}/>
    </div>
  ) 
}

export default MyApp
