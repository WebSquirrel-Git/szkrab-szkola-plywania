import Image from 'next/image';
import BackgroundCrabs from '@/public/assets/images/background_crabs.svg'
import HeroBg from '@/public/assets/images/pool_bg.jpg'
import { ContactForm } from '@/src/components/Forms/ContactForm/ContactForm';
import { ButtonNavPhone } from '@/src/components/ui/buttons/ButtonNavPhone';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basen Wolbrom',
  description:
    'Szkoła pływania Szkrab prowadzi zajęcia nauki pływania na basenie w Wolbromiu. Sprawdź ofertę i zapisz się na lekcje pływania w Wolbromiu.',
  metadataBase: new URL('https://szkolaplywaniaszkrab.pl/baseny/wolbrom'),
  alternates: {
    canonical: 'https://szkolaplywaniaszkrab.pl/baseny/wolbrom',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function BasenWolbrom(){

    return <>
    <div className='hidden lg:block fixed h-screen w-screen z-0'>
      <Image src={BackgroundCrabs} alt='Kraby' fill={true} className='object-contain max-h-screen'/>
    
    </div>
    <div className="flex flex-col 
   
    ">
    <div className='flex w-full h-screen relative items-end justify-center pt-[162px] md:pb-32 pb-8'>
      <Image src={HeroBg} fill alt='Basen Wolbrom'/>
      <div className='flex flex-col z-10 lg:w-[50%] sm:w-[75%] w-[90%] gap-32 items-center justify-center text-center text-white'>
        <h1 className='!text-[48px]'>Basen w Wolbromiu</h1>
       
       <div className='flex flex-col gap-4 sm:w-[400px] w-full'>
        <h3>Dane techniczne</h3>
        <div className='flex flex-col gap-2  w-full'>
            <div className='flex flex-row justify-between w-full py-1.5 border-orange border-b-2'>
                <p>Temperatura wody</p>
                <p>29 °C</p>
            </div>
            <div className='flex flex-row justify-between w-full py-1.5 border-orange border-b-2'>
                <p>Wymiary</p>
                <p>25 m x 12,50 m</p>
            </div>
             <div className='flex flex-row justify-between w-full py-1.5 border-orange border-b-2'>
                <p>Głębokość</p>
                <p>od 107 cm do 137 cm</p>
            </div>
             <div className='flex flex-row justify-between w-full py-1.5 border-orange border-b-2'>
                <p>Parking</p>
                <p>Darmowy</p>
            </div>
        </div>
       </div>
     
    
      </div>
    </div>
    <div className='flex flex-col  w-full 2xl:pl-[250px] 2xl:pr-[250px] lg:pl-[130px] lg:pr-[130px] justify-center items-center'>
      <div className='flex flex-col w-full py-[100px] lg-px-0 px-4 items-center md:gap-[100px] gap-[50px] z-10'>
        <iframe className='rounded-[20px] w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.5466162556986!2d19.760773500000003!3d50.374167799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471703079dd36d45%3A0x6c21719fd8b1b2eb!2sP%C5%82ywalnia%20Kryta!5e1!3m2!1spl!2spl!4v1757682223846!5m2!1spl!2sp" width="800" height="600" style={{border:'0'}}  loading="lazy"></iframe>
       <h2>Zapisz się na zajęcia</h2>
              <div  className='flex flex-col-reverse lg:flex-col justify-center  items-center gap-8'>
          <div className='flex  w-full'>
<ContactForm/>
          </div>
          <div className=' w-full flex flex-col justify-center items-center gap-4 text-center'>
<p>Wypełnij formularz kontaktowy, a nasze biuro skontaktuje się z Tobą w celu ustalenia dogodnego terminu zajęć.</p>
          <ButtonNavPhone/>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
}