import '../styles/globals.css'
import '../styles/styles.scss'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter={true} >
      <motion.div key={router.route} initial={{opacity:0}} transition={{ duration: 0.2 }} animate={{opacity:1}} exit={{opacity:0}}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
