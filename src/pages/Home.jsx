
import {motion} from 'framer-motion'

import React from 'react'
import Veggie from './../components/veggie';
import Popular from './../components/popular';
import './home.css'

export default function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
        <Veggie />
        <Popular />

        <h3 className='home_h3'>With Love from Ilkin Isfandiyar❤</h3>
    </motion.div>
  )
}
