'use client'
import UniversityIcon from '@/public/assets/icons/school-mint.svg'
import PeopleIcon from '@/public/assets/icons/people-mint.svg'
import TimeIcon from '@/public/assets/icons/time-mint.svg'
import GridIcon from '@/public/assets/icons/grid-mint.svg'
import CheckIcon from '@/public/assets/icons/checkmark-circle-mint.svg'
import AccesIcon from '@/public/assets/icons/accessibility-mint.svg'
import Image from 'next/image'

const DATA = [
    {
        img:UniversityIcon,
        alt:'Wykwalifikowana kadra',
        label:'Wykwalifikowana kadra'
    },
    {
        img:PeopleIcon,
        alt:'Kameralne grupy',
        label:'Kameralne grupy'
    },
    {
        img:TimeIcon,
        alt:'Elastyczne terminy',
        label:'Elastyczne terminy'
    },
    {
        img:GridIcon,
        alt:'Podziały grup',
        label:'Podziały grup ze względu na wiek i umiejętności kursantów'
    },
    {
        img:CheckIcon,
        alt:'Różne formy nauki',
        label:'Różne formy nauki w zależności od potrzeb kursanta'
    },
    {
        img:AccesIcon,
        alt:'Indywidualne podejście',
        label:'Indywidualne podejście do każdego pływaka'
    },
]

export const WhyUs = () =>{

    return <div className=' flex flex-row w-full justify-center  flex-wrap gap-8'>
        {DATA.map((item,i)=><div key={i} className='flex flex-col justify-center items-center text-center gap-4 sm:w-[40%] lg:w-[340px] w-[300px]'>
    <Image src={item.img} alt={item.alt} width={130} height={130} loading='eager' className=' xl:w-[100px] xl:h-[100px] md:w-[80px] md:h-[80px] w-[64px] h-[64px]'/>
<p>{item.label}</p>
</div>)}


    </div>
}