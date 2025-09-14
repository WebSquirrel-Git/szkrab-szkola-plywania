'use client'

import Link from 'next/link'
import CallIcon from '@/public/assets/icons/call-white.svg'
import Image from 'next/image'
export const ButtonNavPhone = () =>{

    return <Link href="tel:+48222333444" className='w-full group transition-all duration-500 hover:bg-white hover:border-orange border-2 flex flex-row px-9 py-3 items-center gap-2.5 bg-orange rounded-[15px] text-white justify-center'>
        <Image src={CallIcon} alt='zadzwoń' width={24} height={24} loading='eager' className='transition-all duration-500 group-hover:p-1 group-hover:bg-orange rounded-full'/>
        <p className='transition-all duration-500 group-hover:text-orange group-hover:!text-[18px] !text-[16px]'>+48 444 555 666</p>
    </Link>
}