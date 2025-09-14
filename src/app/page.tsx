import HeroBg from '@/public/assets/images/bg-home.webp'
import Image from 'next/image';
import { ButtonNavRounded } from '../components/ui/buttons/ButtonNavRounded';
import BackgroundCrabs from '@/public/assets/images/background_crabs.svg'
import { WhyUs } from '../components/WhyUs/WhyUs';
import JustynaImg from '@/public/assets/images/Justyna.webp'
import { GROUPS_LIST } from '../components/Groups/List';
import { GroupLink } from '../components/Groups/GroupLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lekcje pływania w Wolbromiu | Szkoła Pływania Szkrab',
  description:
    'Szkoła pływania Szkrab zaprasza na lekcje nauki pływania w Wolbromiu. Zajęcia organizowane są dla młodzieży, dzieci i dorosłych. Pierwsza lekcja grupowa jest DARMOWA.',
  metadataBase: new URL('https://szkolaplywaniaszkrab.pl'),
  alternates: {
    canonical: 'https://szkolaplywaniaszkrab.pl',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function Home() {
  return (
    //  bg-[url(/assets/images/background_crabs.svg)] bg-contain
    <>
    <div className='hidden lg:block fixed h-screen w-screen z-0'>
      <Image src={BackgroundCrabs} alt='Kraby' fill={true} className='object-contain max-h-screen'/>
    
    </div>
    <div className="flex flex-col">
    <div className='flex w-full h-screen relative items-center justify-center pt-[162px]'>
      <Image src={HeroBg} fill alt='Nauka pływania szkoła Szkrab' className='object-cover' fetchPriority='high' loading='eager'/>
      <div className='flex flex-col z-10 lg:w-[50%] sm:w-[75%] w-[90%] gap-6 items-center justify-center text-center text-white'>
        <h1>Nauka pływania na basenie w Wolbromiu</h1>
        <h3 className='!font-medium'>Oferujemy zajęcia nauki pływania w kameralnych grupach oraz w formie lekcji indywidualnych i dwuosobowych. Pierwsze zajęcia grupowe są darmowe.</h3>
     <ButtonNavRounded href='/' label='Sprawdź podział naszych grup'/>
     <div className='hidden sm:flex sm:flex-row flex-col gap-6 pt-8'>
      <span className='flex flex-row gap-4 items-center'>
        <span className='w-[16px] h-[16px] rounded-full bg-orange'></span>
        <h3>Dzieci od 3 lat</h3>
      </span>
      <span className='flex flex-row gap-4 items-center'>
        <span className='w-[16px] h-[16px] rounded-full bg-orange'></span>
        <h3>Młodzież</h3>
      </span>
      <span className='flex flex-row gap-4 items-center'>
        <span className='w-[16px] h-[16px] rounded-full bg-orange'></span>
        <h3>Dorośli</h3>
      </span>
     </div>
      </div>
    </div>
   
    <div className='flex flex-col  w-full 2xl:pl-[250px] 2xl:pr-[250px] lg:pl-[130px] lg:pr-[130px] justify-center items-center'>
      <div className='flex flex-col w-full py-[100px] lg-px-0 px-4 items-center md:gap-[100px] gap-[50px] z-10'>
        <WhyUs/>
        <h2 className='text-center'>Podział zajęć grupowych</h2>
        <div className='flex flex-col gap-8 justify-center items-center'>
<div className='flex flex-col sm:flex-row flex-wrap xl:gap-16 gap-10 justify-center'>
          {GROUPS_LIST.slice(0,GROUPS_LIST.length-2).map((group,i)=><GroupLink key={i} {...group}/>)}
        </div>
        <h3 className='text-center'>Pierwsze zajęcia grupowe są próbne i darmowe!</h3>
        <ButtonNavRounded href='' label='Zapisz się na zajęcia'/>
        </div>
        
        <h2 className='text-center'>Zajęcia indywidualne i dwuosobowe</h2>
        <div className='flex flex-row flex-wrap gap-16 justify-center'>
          {GROUPS_LIST.slice(GROUPS_LIST.length-2).map((group,i)=><GroupLink key={i} {...group}/>)}
        </div>
         <div className='flex flex-col lg:flex-row justify-center gap-12 items-center'>
        <div className='flex flex-col gap-4 xl:w-[520px] w-auto'>
          <h2 className='text-center lg:text-left'>Witaj w Szkole Szkrab!</h2>
          <p className='text-center lg:text-left'>Szkoła Pływania Szkrab to miejsce, które powstało z pasji do pływania i aktywności fizycznej oraz chęci dzielenia się wiedzą i doświadczeniem z wszystkimi szkrabami chcącymi czuć się w wodzie pewnie i bezpiecznie.</p>
        <p className='text-center lg:text-left'>Nazywam się Justyna Jurczyk, jestem magistrem wychowania fizycznego, instruktorką sportu o specjalizacji pływanie oraz instruktorką nauki pływania niemowląt. Swoją przygodę z pływaniem rozpoczęłam jako 7 letnia zawodniczka lokalnego klubu KS Wiking. Regularna aktywność fizyczna wdrażana od najmłodszych lat rozbudziła  we mnie pasję do sportu oraz chęć jej dzielenia z innymi. Od ponad 6 lat prowadzę zajęcia nauki pływania dla dzieci powyżej 3 roku życia, młodzieży oraz osób dorosłych na każdym poziomie zaawansowania. Obecnie jestem również nauczycielem pływania w Krakowskim Szkolnym Ośrodku Sportu. </p>
       <p className='text-center lg:text-left'>Zapraszam Cię na organizowane przeze mnie zajęcia nauki pływania na basenie w Wolbromiu! </p>
        </div>
        <Image src={JustynaImg} alt='Justyna' width={545} height={727} className='xl:w-[500px] h-fit lg:w-[40%] w-[90%] sm:w-[50%] object-contain rounded-[80px]'/>
      </div>
      </div>
     
    </div>
    </div>
    </>
  );
}
