'use client'
import Icon from '@/public/assets/groups/szkraby.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface GroupLinkProps{
    name:string,
    icon:StaticImageData,
    age:string
}

export const GroupLink=({name,age,icon}:GroupLinkProps)=>{

    return <Link href='/' className='flex md:flex-row flex-col justify-center items-center gap-4  xl:w-auto md:w-[350px] w-auto'>
        <Image src={icon} alt={name} width={125} height={125} className='w-[160px] h-[160xp] sm:w-[125px] sm:h-[125px] '/>
        <div className='flex flex-col justify-center md:items-start items-center gap-3'>
            <span className='px-12 py-1 rounded-full bg-gradient-to-r from-mint to-aqua text-white'><h3>{name}</h3></span>
            {age!==''&&<span className='w-fit px-12 py-1 rounded-full bg-gradient-to-r from-mint to-aqua text-white'>{age}</span>}
        </div>
    </Link>
}