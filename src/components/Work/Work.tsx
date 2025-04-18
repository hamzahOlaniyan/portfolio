import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import * as motion from "motion/react-client"


const porfolio = [
    {image:'/Elekt.jpg',title:'Elekt App – Growth Strategy',content:'Increasing customer subscriptions over 500%  through design strategy and rapid prototyping, by simplifying energy costs and data, and providing actionable steps to save money'},
    {image:'/shell.jpg',title:'Shell Energy Assistant App',content:'Educating customers to reduce their energy usage through data driven habits. Increasing customer retention and upselling sustainable products.'},
    {image:'/EA1.jpg',title:'Shell Accuport – AI SAAS',content:'Using AI and data to predict oil procurement orders at efficient ports on a voyage route for shipping management companies. Optimising logistics for efficient purchasing.'},
    {image:'/Meta.jpg',title:'Meta Incident management – Strategy',content:'Process design to successfully decreased the average time to report an incident from 8 minutes to 3 minutes, which resulted in less incidents over time. '},
    {image:'/Solldo.jpg',title:'Soldo SAAS & app',content:'Developing solutions to help businesses seamlessly manage employee expenses via an app and intuitive dashboard for the admin.'},
    {image:'/Deliveroo.jpg',title:'Deliveroo riders',content:'Decreasing the amount of new riders who don’t complete their fist set of shifts from 25% to 18% through rapid experiments.'}
]


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
            {porfolio.slice(0,perView).map((item:{image?:string|StaticImport,title:string,content:string}, idx:number)=>(
                    <motion.article
                    initial={{ opacity: 0, y: 40,scale:.90 }}
                    whileInView={{ opacity: 1, y: 0,scale:1 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                key={idx} className="space-y-6">
                    <div className="bg-blue-100/50 rounded-2xl overflow-hidden">
                        <Image src={item?.image ?? '/shell.jpg'} priority width={100} height={100} alt={'work'} className='w-full h-48 sm:h-96 object-center object-cover'/>
                    </div>
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <p>{item.content}</p>
                </motion.article>
             ))}
      </div>
    </div>
  )
}

export default Work