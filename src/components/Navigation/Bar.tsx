'use client'
import Logo from '@/public/assets/logo/svg/LOGO_NAME_HORIZONTAL_300px.svg'

import Image from 'next/image'
import { ButtonNavPhone } from '../ui/buttons/ButtonNavPhone'
import { ButtonNavMail } from '../ui/buttons/ButtonNavMail'
import Link from 'next/link'

export const Bar = () =>{

    return <div className='box-border hidden lg:flex flex-row bg-white w-full py-6 px-12 justify-between absolute top-0 left-0 z-50'>
        <Image width={300} src={Logo} alt='szkoła pływania szkrab'/>
        <nav className='flex flex-row gap-5 items-center justify-center'>
            <Link className='text-[20px] font-medium' href='/'>
            Nauka pływania
            </Link>
<Link className='text-[20px] font-medium' href='/'>
            Cennik
            </Link>
            <Link className='text-[20px] font-medium' href='/'>
            Basen Wolbrom
            </Link>
        </nav>
        <div className='flex flex-col gap-[5px]'>
<ButtonNavPhone/>
<ButtonNavMail/>
        </div>
        
    </div>
}