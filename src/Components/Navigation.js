import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import AnchorLink from './Anchorlink'
import Button from './Button'

function Navigation() {

  const [showNav, setShowNav] = useState(false)
  const [show, handleShow] = useState(false)

  useEffect(() => {
    const myFunc = () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    }
    window.addEventListener("scroll", myFunc)
    return () => {
      window.removeEventListener("scroll", myFunc)
    }
  }, [])

  return (
    <>
      <motion.nav className={`w-full h-fit fixed top-0 left-0 px-10 md:px-16 lg:px-24 py-3 flex flex-row justify-between items-center z-10 transition ease-in-out ${show ? " bg-primary backdrop-blur shadow-md shadow-primary" : "bg-transparent"}  `}
      >
        <div>
          <AnchorLink route="/#Home">
            Erisam
          </AnchorLink>
        </div>
        <div className="hidden md:flex justify-end items-center gap-5" >
          <AnchorLink route="/#About">
            <Button>
              About
            </Button>
          </AnchorLink>
          <AnchorLink route="/#Services">
            <Button>
              Services
            </Button>
          </AnchorLink>
          <AnchorLink route="/#Projects">
            <Button>
              Projects
            </Button>
          </AnchorLink>
          <AnchorLink route="/#Contact">
            <Button>
              Contact
            </Button>
          </AnchorLink>
        </div>
        <div className=' md:hidden flex w-8 h-8 bg-transparent flex-col justify-evenly items-center relative overflow-hidden cursor-pointer ' onClick={() => setShowNav(!showNav)} >
          <div className={`w-full h-0.5 rounded-sm ${show ? "bg-white" : "bg-primary"}  transition ease-in-out ${showNav ? "-rotate-45 translate-y-2.5" : null} `} />
          <div className={`w-full h-0.5 rounded-sm ${show ? "bg-white" : "bg-primary"} ${showNav ? 'translate-x-full' : null} transition ease-in-out `} />
          <div className={`w-full h-0.5 rounded-sm ${show ? "bg-white" : "bg-primary"} transition ease-in-out ${showNav ? "rotate-45 -translate-y-2" : null} `} />
        </div>
      </motion.nav>
      <AnimatePresence>
        {
          showNav && (
            <motion.nav
              className='fixed top-12 left-0 bg-primary z-30 w-full h-fit flex flex-col justify-start items-center gap-5 p-5'
              initial={{
                opacity: 0,
                y: "-20%"
              }}
              animate={{
                opacity: 1,
                y: "0%"
              }}
              exit={{
                opacity: 0,
                y: "-10%"
              }}
              transition={{
                default: {
                  duration: 0.3
                },
                delayChildren: 0.4
              }}
            >
              <AnchorLink route="/#About">
                <Button>
                  About
                </Button>
              </AnchorLink>
              <AnchorLink route="/#Services">
                <Button>
                  Services
                </Button>
              </AnchorLink>
              <AnchorLink route="/#Projects">
                <Button>
                  Projects
                </Button>
              </AnchorLink>
              <AnchorLink route="/#Contact">
                <Button>
                  Contact
                </Button>
              </AnchorLink>
            </motion.nav>
          )
        }
      </AnimatePresence>
    </>
  )
}

export default Navigation