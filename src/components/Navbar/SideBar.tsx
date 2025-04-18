'use client'
import Link from 'next/link'
import React from 'react'
import * as motion from "motion/react-client"

export const menu = [
  {title:'home',url:'/'},
  {title:'work',url:'/work'},
  {title:'about',url:'/about'},
]

export const SideBar = ({setShowMenu}:{setShowMenu:(state:boolean)=>void,showMenu:boolean}) => {
  return (
    <motion.div
        className='h-[100vh] fixed top-0 right-0 w-full bg-blue-200 z-40 px-4'>
        <div className="h-full flex justify-around items-center">
          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{
                duration: 0.3,
                ease: 'easeOut',
                type:'tween',
            }}
          className="mx-auto">
            {menu.map((item,idx)=>(
              <Link onClick={()=>setShowMenu(false)} key={idx} href={item.url} className='block text-center text-3xl p-1 capitalize'>{item.title}</Link>
            ))}
          </motion.div>
        </div>
    </motion.div>
  )
}
