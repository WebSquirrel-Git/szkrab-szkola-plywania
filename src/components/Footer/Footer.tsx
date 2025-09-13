'use client'
import Logo from '@/public/assets/logo/svg/LOGO_NAME_VERTICAL_300px.svg'
import Image from 'next/image'
import Link from 'next/link'
import FacebookIcon from '@/public/assets/sm/logo-facebook-black.svg'
import InstagramIcon from '@/public/assets/sm/logo-instagram-black.svg'

export const Footer = () =>{


    return <footer className='relative py-[50px] px-4 lg:px-[50px] w-full bg-gradient-to-b from-white to-mint flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-20'>
        <nav className='flex flex-col gap-2 items-center'>
<Link className='transition-all duration-500 hover:border-orange cursor-pointer border-b-2 border-transparent py-1 text-[16px] font-medium' href='/nauka-plywania'>
            Nauka pływania
            </Link>
<Link className='transition-all duration-500 hover:border-orange cursor-pointer border-b-2 border-transparent py-1 text-[16px] font-medium' href='/nauka-plywania#cennik'>
            Cennik
            </Link>
            <Link className='transition-all duration-500 hover:border-orange cursor-pointer border-b-2 border-transparent py-1 text-[16px] font-medium' href='/baseny/wolbrom'>
            Basen Wolbrom
            </Link>
             <Link className='transition-all duration-500 hover:border-orange cursor-pointer border-b-2 border-transparent py-1 text-[16px] font-medium' href='/assets/statues/Polityka_prywatności.pdf'>
            Polityka Prywatności
            </Link>
             <Link className='transition-all duration-500 hover:border-orange cursor-pointer border-b-2 border-transparent py-1 text-[16px] font-medium' href='/assets/statues/Regulamin Szkoła Pływania Szkrab.pdf'>
            Regulamin
            </Link>
        </nav>
<Image src={Logo} alt='Szkoła pływania Szkrab' width={189} height={228} className='h-[150px] w-auto'/>
   <div className='flex flex-col gap-2 items-center'>
    <Link className='transition-all duration-500 hover:border-orange cursor-pointer border-b-2 border-transparent py-1 text-[16px] font-medium' href="mailto:szkola.szkrab@gmail.com">szkola.szkrab@gmail.com</Link>
   <Link className='transition-all duration-500 hover:border-orange cursor-pointer border-b-2 border-transparent py-1 text-[16px] font-medium' href="tel:+48111222333">+48 222 333 444</Link>
   <div className='flex flex-row gap-2'>
    <Link className='cursor-pointer text-[16px] font-medium' href="">
    <Image src={FacebookIcon} alt='Szkrab Facebook' width={24} height={24} loading='lazy'/>
    </Link>
     <Link className='cursor-pointer text-[16px] font-medium' href="">
    <Image src={InstagramIcon} alt='Szkrab Instagram' width={24} height={24} loading='lazy'/>
    </Link>
   </div>
   </div>
    </footer>
}