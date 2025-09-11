import HeroBg from '@/public/assets/images/pool_bg.jpg'
import Image from 'next/image';
import { ButtonNavRounded } from '../components/ui/buttons/ButtonNavRounded';
import BackgroundCrabs from '@/public/assets/images/background_crabs.svg'
import { WhyUs } from '../components/WhyUs/WhyUs';
import JustynaImg from '@/public/assets/images/justyna.jpg'
import { GROUPS_LIST } from '../components/Groups/List';
import { GroupLink } from '../components/Groups/GroupLink';
export default function Home() {
  return (
    //  bg-[url(/assets/images/background_crabs.svg)] bg-contain
    <>
    <div className='hidden lg:block fixed h-screen w-screen z-0'>
      <Image src={BackgroundCrabs} alt='Kraby' fill={true} className='object-contain max-h-screen'/>
    
    </div>
    <div className="flex flex-col 
   
    ">
    <div className='flex w-full h-screen relative items-center justify-center pt-[162px]'>
      <Image src={HeroBg} fill alt='Basen Wolbrom'/>
      <div className='flex flex-col z-10 lg:w-[50%] sm:w-[75%] w-[90%] gap-6 items-center justify-center text-center text-white'>
        <h1>Nauka pływania na basenie w Wolbromiu</h1>
        <h3 className='!font-medium'>Oferujemy zajęcia pływania w kameralnych grupach oraz indywidualnie. Pierwsze zajęcia grupowe są darmowe.</h3>
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
      <div className='flex flex-col w-full py-[100px] lg-px-0 px-4 items-center sm:gap-[100px] gap-[50px]'>
        <WhyUs/>
        <h2 className='text-center'>Podział zajęć grupowych</h2>
        <div className='flex flex-col gap-8 justify-center items-center'>
<div className='flex flex-col sm:flex-row flex-wrap xl:gap-16 gap-4 justify-center'>
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
        <div className='flex flex-col gap-8 xl:w-[520px] w-auto'>
          <h2 className='text-center lg:text-left'>Cześć, jestem Justyna</h2>
          <p className='text-center lg:text-left'>Nasza szkoła to idealne miejsce dla każdego, kto chce nauczyć się pływać, doskonalić swoje umiejętności czy przygotować się do zawodów. Naszym celem jest nie tylko nauka pływania, ale również rozwijanie miłości do wody i sportu. Wierzymy, że pływanie to umiejętność, która przynosi radość, zdrowie i pewność siebie na całe życie. Dlatego staramy się, aby każdy nasz kurs był nie tylko skuteczny, ale również inspirujący i pełen pozytywnych emocji.</p>
        <p className='text-center lg:text-left'>Nasza szkoła to idealne miejsce dla każdego, kto chce nauczyć się pływać, doskonalić swoje umiejętności czy przygotować się do zawodów. Naszym celem jest nie tylko nauka pływania, ale również rozwijanie miłości do wody i sportu. Wierzymy, że pływanie to umiejętność, która przynosi radość, zdrowie i pewność siebie na całe życie. Dlatego staramy się, aby każdy nasz kurs był nie tylko skuteczny, ale również inspirujący i pełen pozytywnych emocji.</p>
        </div>
        <Image src={JustynaImg} alt='Justyna' width={545} height={727} className='xl:w-[500px] h-fit lg:w-[40%] w-[90%] object-contain rounded-[80px]'/>
      </div>
      </div>
     
    </div>
    </div>
    </>
  );
}
