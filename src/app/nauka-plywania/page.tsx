import Image from 'next/image';
import HeroBg from '@/public/assets/images/pool_bg.jpg'
import BackgroundCrabs from '@/public/assets/images/background_crabs.svg'
import { ButtonNavRounded } from '@/src/components/ui/buttons/ButtonNavRounded';
import { GROUPS_LIST } from '@/src/components/Groups/List';
import { GroupDescription } from '@/src/components/Groups/GroupDescription';
import { ContactForm } from '@/src/components/Forms/ContactForm/ContactForm';
import { ButtonNavPhone } from '@/src/components/ui/buttons/ButtonNavPhone';
export default function NaukaPlywania(){

    return(
       <>
    <div className='hidden lg:block fixed h-screen w-screen z-0'>
      <Image src={BackgroundCrabs} alt='Kraby' fill={true} className='object-contain max-h-screen'/>
    
    </div>
    <div className="flex flex-col">
<div className='flex w-full h-screen relative items-center justify-center pt-[162px]'>
      <Image src={HeroBg} fill alt='Basen Wolbrom'/>
      <div className='flex flex-col z-10 lg:w-[50%] sm:w-[75%] w-[90%] gap-6 items-center justify-center text-center text-white'>
        <h1>Nauka pływania dla Dzieci, Młodzieży i Dorosłych</h1>
        <h3 className='!font-medium'>Pierwsza lekcja grupowa jest DARMOWA.</h3>
     <ButtonNavRounded href='/' label='Zapisz się na lekcję próbną'/>
  
      </div>
    </div>
    <div className='flex flex-col  w-full 2xl:pl-[250px] 2xl:pr-[250px] lg:pl-[130px] lg:pr-[130px] justify-center items-center'>
      <div className='flex flex-col w-full py-[100px] lg-px-0 px-4 items-center md:gap-[100px] gap-[50px] z-10'>
        <h2 id='cennik'>Cennik</h2>
        <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-12'>
            <div className='flex flex-col gap-4 md:gap-8'>
                <h3 className='text-mint text-center'>Zajęcia grupowe</h3>
                <div className='flex flex-col gap-2 items-center'>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>40 zł</span>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>30/45 minut</span>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>+ bilet wstępu </span>
                </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-8'>
                <h3 className='text-mint text-center'>Zajęcia Indywidualne</h3>
                <div className='flex flex-col gap-2 items-center'>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>90 zł</span>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>45 minut</span>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>+ bilet wstępu </span>
                </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-8'>
                <h3 className='text-mint text-center'>Zajęcia Dwuosobowe</h3>
                <div className='flex flex-col gap-2 items-center'>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>130 zł</span>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>45 minut</span>
<span className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold'>+ bilety wstępu </span>
                </div>
            </div>
        </div>
        <h2>Płatności</h2>
        <p className='2xl:!text-[24px] !font-semibold text-center'>Podane ceny zajęć nie zawierają biletu wstępu na basen. Płatność za zajęcia jest miesięczna i należy uregulować ją z góry do 10 dnia każdego miesiąca. Opłata miesięczna to cena pojedynczej lekcji pomnożona przez liczbę spotkań zaplanowaną w ramach miesiąca. Wysokość opłaty należnej za dany miesiąc klienci otrzymają na początku każdego miesiąca drogą mailową.</p>
        <div className='flex flex-col md:gap-8 gap-4 items-center'>
 <h3 className='text-mint'>Zapisz się na DARMOWĄ grupową lekcję próbną!</h3>
 <ButtonNavRounded label='Zapisz się na darmową lekcję próbną' href=''/>
        </div>
       <h2>Podział grup</h2>
       <div className='flex xl:flex-row flex-col gap-16 justify-center flex-wrap xl:items-start items-center'>
        {GROUPS_LIST.map((group,i)=><GroupDescription {...group} key={i}/>)}
       </div>
       <h2>Odrabianie zajęć</h2>
       <p className='text-center'>Kursanci mogą odwołać i odrobić każdą lekcje zaplanowaną w ramach kursu. Warunkiem możliwości odrobienia zajęć jest zgłoszenie nieobecności na zajęciach nie później niż na  8 godzin przed rozpoczęciem lekcji. Nieobecność na lekcji należy zgłosić do biura szkoły telefonicznie 506 764 009 lub mailowo biuro.szkrab@gmail.com. Każdą prawidłowo zgłoszoną nieobecność klienci mogą odrobić w innym terminie niż ich regularny termin zajęć. W celu ustalenia terminu odrabiania zajęć prosimy o kontakt z biurem. </p>
        <h2>Zapisz się na zajęcia</h2>
        <div className='flex flex-col-reverse xl:flex-row justify-center xl:items-end items-center xl:gap-0 gap-8'>
          <div className='flex xl:pr-[50px] xl:w-[40%] sm:w-[500px] w-full xl:border-r-[5px] border-mint'>
<ContactForm/>
          </div>
          <div className='xl:w-[40%] sm:w-[500px] w-full flex flex-col justify-end xl:pl-[50px]  gap-4 xl:text-left text-center'>
<p>Nasza szkoła to idealne miejsce dla każdego, kto chce nauczyć się pływać, doskonalić swoje umiejętności czy przygotować się do zawodów. Naszym celem jest nie tylko nauka pływania, ale również rozwijanie miłości do wody i sportu. Wierzymy, że pływanie to umiejętność, która przynosi radość, zdrowie i pewność siebie na całe życie. Dlatego staramy się, aby każdy nasz kurs był nie tylko skuteczny, ale również inspirujący i pełen pozytywnych emocji.</p>
          <ButtonNavPhone/>
          </div>
        </div>
        </div>
        </div>
    </div>
    </>
    )
}