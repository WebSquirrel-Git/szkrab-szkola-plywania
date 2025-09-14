import Image from 'next/image';
import HeroBg from '@/public/assets/images/bg-nauka_plywania.webp';
import BackgroundCrabs from '@/public/assets/images/background_crabs.svg';
import {ButtonNavRounded} from '@/src/components/ui/buttons/ButtonNavRounded';
import {GROUPS_LIST} from '@/src/components/Groups/List';
import {GroupDescription} from '@/src/components/Groups/GroupDescription';
import {ContactForm} from '@/src/components/Forms/ContactForm/ContactForm';
import {ButtonNavPhone} from '@/src/components/ui/buttons/ButtonNavPhone';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Nauka pływania w Wolbromiu',
  description:
    'Nasza szkoła oferuje zajęcia nauki pływania w grupach sześcioosobowych, oraz w formie lekcji indywidualnych i dwuosobowych. Sprawdź cennik i zapisz się na zajęcia!',
  metadataBase: new URL('https://szkolaplywaniaszkrab.pl/nauka-plywania'),
  alternates: {
    canonical: 'https://szkolaplywaniaszkrab.pl/nauka-plywania',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function NaukaPlywania() {
  return (
    <>
      <div className="hidden lg:block fixed h-screen w-screen z-0">
        <Image
          src={BackgroundCrabs}
          alt="Kraby"
          fill={true}
          className="object-contain max-h-screen"
          loading="eager"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex w-full h-screen relative items-center justify-center pt-[162px]">
          <Image
            src={HeroBg}
            fill
            alt="Nauka pływania szkoła Szkrab"
            className="object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="flex flex-col z-10 lg:w-[50%] sm:w-[75%] w-[90%] gap-6 items-center justify-center text-center text-white">
            <h1>Nauka pływania dla Dzieci, Młodzieży i Dorosłych</h1>
            <h3 className="!font-medium">
              Pierwsza lekcja grupowa jest DARMOWA
            </h3>
            <ButtonNavRounded
              href="#kontakt"
              label="Zapisz się na lekcję próbną"
            />
          </div>
        </div>
        <div className="flex flex-col  w-full 2xl:pl-[250px] 2xl:pr-[250px] lg:pl-[130px] lg:pr-[130px] justify-center items-center">
          <div className="flex flex-col w-full py-[100px] lg-px-0 px-4 items-center md:gap-[100px] gap-[50px] z-10">
            <h2 id="cennik">Cennik</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-8">
                <h3 className="text-mint text-center">Zajęcia grupowe</h3>
                <div className="flex flex-col gap-2 items-center">
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    40 zł
                  </span>
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    30/45 minut
                  </span>
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    + bilet wstępu{' '}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-8">
                <h3 className="text-mint text-center">Zajęcia Indywidualne</h3>
                <div className="flex flex-col gap-2 items-center">
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    90 zł
                  </span>
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    45 minut
                  </span>
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    + bilet wstępu{' '}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-8">
                <h3 className="text-mint text-center">Zajęcia Dwuosobowe</h3>
                <div className="flex flex-col gap-2 items-center">
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    130 zł
                  </span>
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    45 minut
                  </span>
                  <span className="2xl:text-[32px] xl:text-[28px] lg:text-[24px] sm:text-[16px] text-[14px] font-semibold">
                    + bilety wstępu{' '}
                  </span>
                </div>
              </div>
            </div>
            <h2>Płatności</h2>
            <p className="2xl:!text-[24px] !font-semibold text-center">
              Podane ceny zajęć nie zawierają biletu wstępu na basen. Płatność
              za zajęcia jest miesięczna i należy uregulować ją z góry do 10
              dnia każdego miesiąca. Opłata miesięczna to cena pojedynczej
              lekcji pomnożona przez liczbę spotkań zaplanowaną w ramach
              miesiąca. Wysokość opłaty należnej za dany miesiąc klienci
              otrzymają na początku każdego miesiąca drogą mailową.
            </p>
            <div className="flex flex-col md:gap-8 gap-4 items-center">
              <h3 className="text-mint text-center">
                Zapisz się na DARMOWĄ grupową lekcję próbną!
              </h3>
              <ButtonNavRounded
                label="Zapisz się na darmową lekcję próbną"
                href=""
              />
            </div>
            <h2 id="grupy">Podział grup</h2>
            <div className="flex xl:flex-row flex-col gap-16 justify-center flex-wrap xl:items-start items-center">
              {GROUPS_LIST.map((group, i) => (
                <GroupDescription {...group} key={i} />
              ))}
            </div>
            <h2>Odrabianie zajęć</h2>
            <p className="text-center">
              Kursanci mogą odwołać i odrobić każdą lekcje zaplanowaną w ramach
              kursu. Warunkiem możliwości odrobienia zajęć jest zgłoszenie
              nieobecności na zajęciach nie później niż na 8 godzin przed
              rozpoczęciem lekcji. Nieobecność na lekcji należy zgłosić do biura
              szkoły telefonicznie 506 764 009 lub mailowo
              biuro.szkrab@gmail.com. Każdą prawidłowo zgłoszoną nieobecność
              klienci mogą odrobić w innym terminie niż ich regularny termin
              zajęć. W celu ustalenia terminu odrabiania zajęć prosimy o kontakt
              z biurem.{' '}
            </p>
            <h2 id="kontakt">Zapisz się na zajęcia</h2>
            <div className="flex flex-col-reverse lg:flex-col justify-center  items-center gap-8">
              <div className="flex  w-full">
                <ContactForm />
              </div>
              <div className=" w-full flex flex-col justify-center items-center gap-4 text-center">
                <p>
                  Wypełnij formularz kontaktowy, a nasze biuro skontaktuje się z
                  Tobą w celu ustalenia dogodnego terminu zajęć.
                </p>
                <span>
                  <ButtonNavPhone />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
