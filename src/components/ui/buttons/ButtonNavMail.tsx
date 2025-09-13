'use client'

import Link from 'next/link'
import MailIcon from '@/public/assets/icons/mail-white.svg'
import Image from 'next/image'
export const ButtonNavMail = () =>{

    return <Link href="mailto:biuro.szkrab@gmail.com" className='group transition-all duration-500 hover:bg-white hover:border-mint border-2 flex flex-row px-9 py-3 items-center gap-2.5 bg-mint rounded-[15px] text-white justify-center'>
        <Image src={MailIcon} alt='Wyślij e-mail' width={24} height={24} className='transition-all duration-500 group-hover:p-1 group-hover:bg-mint rounded-full' loading='eager'/>
        <p className='transition-all duration-500 group-hover:text-mint group-hover:!text-[18px] !text-[16px]'>biuro.szkrab@gmail.com</p>
    </Link>
}