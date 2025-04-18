import * as motion from "motion/react-client"
import React from 'react'

const page = () => {
  return (
    <div className='p-4 sm:px-28'>
      <div className="sm:h-[75vh] sm:grid sm:grid-cols-2 sm:gap-24 sm:items-center sm:justify-center sm:p-12">
        <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: .8,
                  ease:'easeIn',
                  type:{type:'inertia'}
              }}
            className="w-full h-60 sm:h-96 bg-sky-500 mb-6 rounded-2xl"></motion.div>
        <motion.h2 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{
                 duration: .8,
                 ease:'easeIn',
                 type:{type:'inertia'}
             }}
        className="text-3xl font-medium sm:text-4xl sm:leading-11">I am a Product designer, educator & speaker, with a passion for building meaningful experiences and connecting with people</motion.h2>
      </div>
    </div>
  )
}

export default page