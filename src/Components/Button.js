import React from 'react'
import { motion } from 'framer-motion'

function Button({ children, style, click }) {
    return (
        <motion.button
            className={style}
            onClick={click}
            initial={{
                opacity: 0,
                scale: 0
            }}
            whileInView={{
                opacity: 1,
                scale: 1
            }}
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
        >
            {children}
        </motion.button>
    )
}

export default Button