'use client'
import Logo from '@/public/assets/logo/svg/LOGO_NAME_HORIZONTAL_300px.svg'
import MenuIcon from '@/public/assets/icons/menu-white.svg'
import CloseIcon from '@/public/assets/icons/close-circle-orange.svg'
import Image from 'next/image'
import { ButtonNavPhone } from '../ui/buttons/ButtonNavPhone'
import { ButtonNavMail } from '../ui/buttons/ButtonNavMail'
import Link from 'next/link'
import { useState } from 'react'
import CallIcon from '@/public/assets/icons/call-orange.svg'
import MailIcon from '@/public/assets/icons/mail-orange.svg'

export const Bar = () =>{
const [showMenu,setShowMenu] = useState(false)
const onShowMenu = () =>{
    setShowMenu(true)
}
const onHideMenu = () =>{
    setShowMenu(false)
}
    return <><div className='box-border border-b-2 border-orange hidden md:flex flex-row flex-wrap gap-2 bg-white w-full py-6 px-12 justify-around lg:justify-between absolute top-0 left-0 z-50'>
        <Link href='/'><Image width={300} src={Logo} alt='szkoła pływania szkrab' className='xl:w-[300px] w-[200px]'/></Link>
        <nav className='flex flex-row gap-5 items-center justify-center'>
            <Link className='text-[20px] font-medium' href='/nauka-plywania'>
            Nauka pływania
            </Link>
<Link className='text-[20px] font-medium' href='/nauka-plywania#cennik'>
            Cennik
            </Link>
            <Link className='text-[20px] font-medium' href='/baseny/wolbrom'>
            Basen Wolbrom
            </Link>
        </nav>
        <div className='flex lg:flex-col flex-row gap-[5px]'>
<ButtonNavPhone/>
<ButtonNavMail/>
        </div>
        
    </div>
    <button onClick={onShowMenu} className='rounded-full cursor-pointer block md:hidden fixed top-8 right-8 z-30 p-3 bg-orange'><Image src={MenuIcon} width={32} height={32} alt='Menu'/></button>
   {showMenu&&<div className='p-8 fixed z-40 top-0 left-0 w-screen h-screen bg-white flex flex-col justify-between items-center'>
    <button onClick={onHideMenu} className='cursor-pointer self-end'><Image src={CloseIcon} width={48} height={48} alt='Close'/></button>
     <div className='flex flex-col gap-2'>
      <Link className='text-center w-[200px] text-[24px] font-medium py-3 border-b-2 border-orange' href='/'>
            Strona główna
            </Link>
     <Link className='text-center w-[200px] text-[24px] font-medium py-3 border-b-2 border-orange' href='/nauka-plywania'>
            Nauka pływania
            </Link>
<Link className='text-center w-[200px] text-[24px] font-medium py-3 border-b-2 border-orange' href='/nauka-plywania#cennik'>
            Cennik
            </Link>
            <Link className='text-center w-[200px] text-[24px] font-medium py-3 border-b-2 border-orange' href='/baseny/wolbrom'>
            Basen Wolbrom
            </Link>
            </div>
            <div className='flex flex-col gap-2'>
               <Image width={300} src={Logo} alt='szkoła pływania szkrab' className='w-[300px] mb-6'/>
               <Link className='flex flex-row gap-2 justify-center text-[20px] font-semibold text-center' href='tel:+48222333444'>
               <Image src={CallIcon} alt='Zadzwoń' width={24} height={24}/>
               +48 222 333 444</Link> 
               <Link className='flex flex-row gap-2 justify-center text-[20px] font-semibold text-center' href='mailto:biuro.szkrab@gmail.com'>
               <Image src={MailIcon} alt='Wyślij e-mail' width={24} height={24}/>
               biuro.szkrab@gmail.com</Link> 
            </div>
    </div>}
    </>
}