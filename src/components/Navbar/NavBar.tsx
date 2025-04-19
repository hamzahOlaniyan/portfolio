'use client'
import React, { useState } from 'react'
import { menu, SideBar } from './SideBar';
import Hamburger from '../Hamburger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';


export const NavBar = () => {

  const path = usePathname()
  const [showMenu, setShowMenu]= useState(false)
  return (
    <div className='w-full h-16 sm:h-20'>
        <div className="h-full flex justify-between items-center px-4 sm:px-20 relative">
            <motion.div
                 initial={{ opacity: 0, scale: .95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{
                     duration: .8,
                     ease:'easeIn',
                     type:{type:'inertia'}
                 }}
               className="h1 text-lg sm:text-2xl font-semibold capitalize z-50">Simon yoseph</motion.div>
            <div className="hidden sm:flex gap-2 items-center">
              {menu.map((item,idx)=>(
                <Link key={idx} href={item.url} className={`${path === item.url ? 'underline':''} block text-center text-lg p-1 capitalize`}>{item.title}</Link>
              ))}
            </div>
            <Hamburger isOpen={showMenu} toggle={() => setShowMenu(!showMenu)} />   
        </div>
        {
          showMenu && <SideBar setShowMenu={setShowMenu} showMenu={showMenu} />
        }
    </div>
  )
}
