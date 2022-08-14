import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function ChoiseCard({ children, image }) {
    return (
        <motion.div
            className='w-full h-fit flex flex-col gap-1 justify-center items-center '
            initial={{
                opacity: 0,
                scale: 0.9,
                y: "10%"
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                y: "0%"
            }}
            transitio={{
                default: {
                    duration: 0.3
                }
            }}
        >
            <motion.div className='w-20 h-20 relative' >
                <Image src={image} layout='fill' className='object-contain invert-[.56] sepia-[.19] saturate-[3] hue-rotate-[351deg] brightness-95 contrast-[.92] ' />
            </motion.div>
            <motion.div>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default ChoiseCard