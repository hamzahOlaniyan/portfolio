import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import * as motion from "motion/react-client"
import Link from 'next/link'
import { url } from 'inspector'
import { porfolio } from '@/app/work/portfolio'

export interface Props{
  image?:string|StaticImport,
  title:string,
  content:string,
  url:string
}

const Work = ({perView=porfolio.length}:{perView?:number}) => {
  return (
    <div>
        <motion.h2
                 initial={{ opacity: 0, y: 40,scale:.90 }}
                 whileInView={{ opacity: 1, y: 0,scale:1 }}
                 viewport={{ amount: 0.2 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-medium capitalize text-center sm:text-4xl sm:my-18">a selection of my work</motion.h2>
        <div className="my-8 flex flex-col gap-16 sm:grid sm:grid-cols-2 sm:gap-24">
            {porfolio.slice(0,perView).map((item:Props, idx:number, )=>(
                    <Link href={`/${item.url}`} key={idx}>
                      <motion.article
                      initial={{ opacity: 0, y: 40,scale:.90 }}
                      whileInView={{ opacity: 1, y: 0,scale:1 }}
                      viewport={{ amount: 0.2 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="space-y-6">
                      <div className="bg-blue-100/50 rounded-2xl overflow-hidden">
                          <Image src={item?.image ?? '/shell.jpg'} priority width={1000} height={1000} alt={'work'} className='w-full h-48 sm:h-96 object-center object-contain'/>
                      </div>
                      <h1 className="text-lg font-semibold">{item.title}</h1>
                      <p>{item.content}</p>
                  </motion.article>
                </Link>
             ))}
      </div>
    </div>
  )
}

export default Work