import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnchorLink from '../src/Components/Anchorlink'
import Button from '../src/Components/Button'
import ChoiseCard from '../src/Components/ChoiseCard'

export default function Home() {

  const transition = {
    default: {
      duration: 0.3
    },
    // delayChildren: 0.4
  }

  const textAnimate = {
    initial: {
      opacity: 0,
      y: "10%"
    },
    whileInView: {
      opacity: 1,
      y: "0%"
    }
  }

  const imageAnimate = {
    initial: {
      opacity: 0,
      scale: 1.1
    },
    whileInView: {
      opacity: 1,
      scale: 1
    }
  }

  return (
    <motion.div
      className="overflow-x-hidden">
      <Head>
        <title>Erisam Engineering Services</title>
        <meta name="description" content="Swimming Pool Experts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        className='h-screen bg-sunny-pool bg-no-repeat bg-fixed bg-center bg-cover p-0'
        initial={{
          scale: 1.2,
          backgroundAttachment: "fixed"
        }}
        animate={{
          scale: 1,
          backgroundAttachment: "fixed"
        }}
        transition={transition}
      >
        <motion.div
          id="Home"
          className='w-full h-full bg-black/30 flex flex-col justify-center items-center gap-3'
          transition={transition} >
          <motion.h2
            {...textAnimate}
          >
            Innovative Designing
          </motion.h2>
          <motion.p {...textAnimate}>
            Building your dream pool
          </motion.p>
          <AnchorLink route="tel:0242517608">
            <Button style="primary-btn" >
              Call Now
            </Button>
          </AnchorLink>
        </motion.div>
      </motion.main>

      <motion.section id="Services" className='flex flex-col md:flex-row-reverse  gap-5' transition={transition} >
        <motion.div className='md:w-1/2 flex flex-col gap-3 md:justify-center' >
          <motion.h3 {...textAnimate} >
            Our Services
          </motion.h3>
          <motion.ul className=' list-disc px-5 ' transition={{
            delayChildren: 0.3
          }} >
            <motion.li {...textAnimate}>
              Complete Remodeling
            </motion.li>
            <motion.li {...textAnimate}>
              Pool tiling
            </motion.li>
            <motion.li {...textAnimate}>
              Pool Engineering
            </motion.li>
            <motion.li {...textAnimate}>
              Pool Washing
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div className='w-full md:w-1/2 h-80 overflow-hidden ' >
          <motion.div className='w-full h-full relative'
            {...imageAnimate}
          >
            <Image src="/pool-nowater.jpg" layout='fill' className='object-cover' />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className='grid grid-cols-1 md:grid-cols-2 gap-3' >
        <div className='grid grid-cols-2'>
          <ChoiseCard image="/home.png" >
            Vast Experience
          </ChoiseCard>
          <ChoiseCard image="/puzzle.png" >
            Professional Team
          </ChoiseCard>
        </div>
        <div className='grid grid-cols-2'>
          <ChoiseCard image="/tile.png" >
            High Finish
          </ChoiseCard>
          <ChoiseCard image="/bank.png" >
            Sustainable
          </ChoiseCard>
        </div>
      </motion.section>

      <motion.section
        id="About"
        className='grid grid-cols-1 md:grid-cols-2 gap-5'
        transition={transition}>
        <motion.div
          className='flex flex-col gap-3 md:justify-center'
          transition={transition}
        >
          <motion.h3 {...textAnimate}>
            About Us
          </motion.h3>
          <motion.p className='text-lg text-primary' {...textAnimate} >
            Innovative Designing
          </motion.p>
          <motion.p {...textAnimate}>
            Erisam Engineering Services was estabished in 2nd October, 2008. We are located in East Legon, Accra Ghana. We are Experts in building swimming pool and have made projects for many Companies.
          </motion.p>
        </motion.div>
        <motion.div className='w-full h-80 overflow-hidden ' >
          <motion.div className='w-full h-full relative'
            {...imageAnimate}
          >
            <Image src="/pool-construction.jpg" layout='fill' className='object-cover' />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section id="Projects" className='grid grid-cols-1 gap-5' >
        <motion.h3 {...textAnimate}>
          Recent Projects
        </motion.h3>
        <motion.div className='grid grid-cols-1 gap-5'>
          <motion.div className='w-full h-60 md:h-96 overflow-hidden ' >
            <motion.div className='w-full h-full relative'
              {...imageAnimate}
            >
              <Image src="/pool-front.jpg" layout='fill' className='object-cover' />
            </motion.div>
          </motion.div>
          <motion.div className='w-full h-60 md:h-96 overflow-hidden ' >
            <motion.div className='w-full h-full relative'
              {...imageAnimate}
            >
              <Image src="/pool-wide.jpg" layout='fill' className='object-cover' />
            </motion.div>
          </motion.div>
          <motion.div className='w-full h-60 md:h-96 overflow-hidden ' >
            <motion.div className='w-full h-full relative'
              {...imageAnimate}
            >
              <Image src="/pool-nowater.jpg" layout='fill' className='object-cover' />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section id="Contact" className='grid grid-cols-1 gap-5 text-primary' >
        <motion.div className='flex flex-col gap-3 items-center'>
          <motion.h2 {...textAnimate}>
            Contact us
          </motion.h2>
          <motion.div className='w-full flex flex-col md:flex-row gap-3 items-center ' >
            <motion.div className='w-3/5 h-fit flex flex-col justify-center items-center text-center' {...textAnimate} >
              <motion.div className='w-12 h-12 relative' >
                <Image src='/home.png' layout='fill' className='object-contain color-change ' />
              </motion.div>
              <motion.p>
                P.O Box 909, Teshie Nungua Estate
              </motion.p>
            </motion.div>
            <motion.div className='w-3/5 h-fit flex flex-col justify-center items-center text-center' {...textAnimate} >
              <motion.div className='w-12 h-12 relative' >
                <Image src='/mail.png' layout='fill' className='object-contain color-change ' />
              </motion.div>
              <AnchorLink route="mailto:samuelniiagoe@gmail.com" >
                samuelniiagoe@gmail.com
              </AnchorLink>
            </motion.div>
            <motion.div className='w-3/5 h-fit flex flex-col justify-center items-center text-center' {...textAnimate} >
              <motion.div className='w-12 h-12 relative' >
                <Image src='/phone.png' layout='fill' className='object-contain color-change ' />
              </motion.div>
              <AnchorLink route="tel:+233242517608" >
                (+233) 24 2517 608
              </AnchorLink>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className='w-full'>
          <motion.form>
            <motion.div className='grid grid-cols-2 gap-3' >
              <motion.fieldset {...textAnimate}>
                <motion.label>
                  first Name
                </motion.label>
                <motion.input type="text" />
              </motion.fieldset>
              <motion.fieldset {...textAnimate}>
                <motion.label>
                  last Name
                </motion.label>
                <motion.input type="text" />
              </motion.fieldset>
            </motion.div>
            <motion.div className='grid grid-cols-2 gap-3'>
              <motion.fieldset {...textAnimate}>
                <motion.label>
                  Email
                </motion.label>
                <motion.input type="text" />
              </motion.fieldset>
              <motion.fieldset {...textAnimate}>
                <motion.label>
                  Phone
                </motion.label>
                <motion.input type="text" />
              </motion.fieldset>
            </motion.div>
            <motion.fieldset {...textAnimate}>
              <motion.label>
                Message
              </motion.label>
              <motion.textarea type="text" />
            </motion.fieldset>
          </motion.form>
        </motion.div>
        <motion.p className='w-full text-center' {...textAnimate} >
          2022  by Mathias Martey Website Development Services
        </motion.p>
      </motion.section>

    </motion.div>
  )
}
