'use client'

import Link from 'next/link'
import CallIcon from '@/public/assets/icons/call-white.svg'
import Image from 'next/image'
export const ButtonNavPhone = () =>{

    return <Link href="tel:+48222333444" className='flex flex-row px-9 py-3 items-center gap-2.5 bg-orange rounded-[15px] text-white justify-center'>
        <Image src={CallIcon} alt='zadzwoń' width={24} height={24} loading='eager'/>
        <p className='!text-[16px]'>+48 444 555 666</p>
    </Link>
}