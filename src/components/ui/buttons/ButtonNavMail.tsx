'use client'

import Link from 'next/link'
import MailIcon from '@/public/assets/icons/mail-white.svg'
import Image from 'next/image'
export const ButtonNavMail = () =>{

    return <Link href="mailto:biuro.szkrab@gmail.com" className='flex flex-row px-9 py-3 items-center gap-2.5 bg-mint rounded-[15px] text-white justify-center'>
        <Image src={MailIcon} alt='Wyślij e-mail' width={24} height={24} loading='eager'/>
        <p className='!text-[16px]'>biuro.szkrab@gmail.com</p>
    </Link>
}