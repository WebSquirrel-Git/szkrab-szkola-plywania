'use client'
import Link from 'next/link'

interface ButtonNavRoundedProps{
    label:string,
    href:string
}

export const ButtonNavRounded = ({label,href}:ButtonNavRoundedProps) =>{
    return <Link href={href} className='font-semibold flex text-[14px] sm:text-[16px] px-9 py-3 items-center  bg-orange rounded-[25px] text-white justify-center'>
  {label}
    </Link>
}