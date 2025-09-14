import SzkrabyIcon from '@/public/assets/groups/szkraby.svg';
import KrabyIcon from '@/public/assets/groups/kraby.svg';
import OsmiorniceIcon from '@/public/assets/groups/osmiornice.svg';
import DelfinyIcon from '@/public/assets/groups/delfiny.svg';
import RekinyIcon from '@/public/assets/groups/rekiny.svg';
import DorosliIcon from '@/public/assets/groups/dorosli.svg';
import IndywidualneIcon from '@/public/assets/groups/indywidualne.svg';
import DwuosoboweIcon from '@/public/assets/groups/dwuosobowe.svg';
export const GROUPS_LIST = [
  {
    name: 'Szkraby',
    age: '3-4 lata',
    icon: SzkrabyIcon,
    list: [
      'Czas zajęć 30 minut',
      'Wielkość grupy 4 kursantów',
      'Zajęcia bez udziału rodziców',
      'Instruktor jest z dziećmi w wodzie',
    ],
    description:
      'Zajęcia nauki pływania w formie zabawy dla najmłodszych dzieci rozpoczynających naukę pływania. Celem zajęć w grupie szkrabów będzie oswojenie kursantów ze środowiskiem wodnym, przyzwyczajenie ich twarzy, oczu oraz uszu do kontaktu z wodą, nauka zanurzenia głowy pod wodę i wykonania wydechu pod wodą. Podczas zajęć w tej grupie wiekowej poszczególne zadania będę wykonywane w formie zabaw. Na lekcjach pojawią się elementy pływania z zastosowaniem sprzętu asekuracyjnego oraz elementy ćwiczeń wypornościowych - samodzielnego leżenia na wodzie w pozycji na brzuchu oraz na plecach, a także elementy prostych skoków do wody na nogi.',
  },
  {
    name: 'Kraby',
    age: '5-6 lat',
    icon: KrabyIcon,
    list: [
      'Czas zajęć 30 minut',
      'Wielkość grupy 4 kursantów',
      'Zajęcia bez udziału rodziców',
      'Instruktor jest z dziećmi w wodzie',
    ],
    description:
      'Zajęcia dla dzieci rozpoczynających przygodę z pływaniem. Celem zajęć w tej grupie jest oswojenie kursantów ze środowiskiem wodnym i przyzwyczajenie ich twarzy, oczu oraz uszu do kontaktu z wodą, nauka zanurzenia głowy pod wodę i wykonania wydechu do wody. Podczas kursu w grupie krabów zwrócimy uwagę na naukę poprawnej pracy nóg do stylu dowolnego oraz grzbietowego i podejmiemy liczne próby przemieszczania się w wodzie z pomocą sprzętu wypornościowego oraz rozpoczniemy naukę samodzielnego pływania strzałką na brzuchu i na plecach w pozycji na baczność. Na zajęciach pojawią się także próby pierwszych skoków do wody na nogi.',
  },
  {
    name: 'Meduzy',
    age: '7-10 lat',
    icon: OsmiorniceIcon,
    list: [
      'Wielkość grupy 6 kursantów',
      'Zajęcia bez udziału rodzica',
      'Czas zajęć 45 minut',
      'Instruktor jest z dziećmi w wodzie',
    ],
    description:
      'Zajęcia dla dzieci rozpoczynających przygodę z pływaniem. Celem zajęć w tej grupie jest adaptacja do środowiska wodnego, nauka zanurzenia głowy pod wodę oraz wykonanie prawidłowego wydechu do wody, Podczas kursu w grupie meduz skupimy się na nauce prawidłowej pracy nóg do stylu dowolnego oraz grzbietowego i podejmiemy pierwsze próby samodzielnego pływania strzałką na brzuchu oraz na baczność w pozycji na plecach. W trakcie kursu rozpoczniemy naukę pracy ramion do stylów symetrycznych - grzbiet i kraul. Na zajęciach pojawią się także próby pierwszych skoków do wody na nogi.',
  },
  {
    name: 'Delfiny',
    age: 'średniozaawansowana',
    icon: DelfinyIcon,
    list: [
      'Wielkość grupy 6 kursantów',
      'Zajęcia bez udziału rodzica',
      'Czas zajęć 45 minut',
      'Instruktor prowadzi zajęcia z brzegu',
    ],
    description:
      'Zajęcia dla dzieci kontynuujących naukę pływania, które opanowały podstawową technikę pływania stylem grzbietowym. Celem zajęć w tej grupie będzie doskonalenie poznanych elementów pływania oraz dalsza nauka i doskonalenie stylu dowolnego - kraula. Ze względu na wyższy poziom zaawansowania kursantów lekcje przybiorą poważniejszy charakter, ograniczymy czas przeznaczony na zabawę i zwiększymy czas i liczbę ćwiczeń pływackich, wydłużymy także jednorazowo pokonywane odcinki pływackie. Na zajęciach pojawią się elementy ',
  },
  {
    name: 'Rekiny',
    age: 'zaawansowana',
    icon: RekinyIcon,
    list: [
      'Wielkość grupy 6 kursantów',
      'Zajęcia bez udziału rodzica',
      'Czas zajęć 45 minut',
      'Instruktor prowadzi zajęcia z brzegu',
    ],
    description:
      'Zajęcia dla kursantów średniozaawansowanych, które opanowały technikę pływania stylem grzbietowym oraz stylem dowolnym (kraulem). Celem zajęć w tej grupie będzie doskonalenie opanowanych stylów pływackich oraz nauka stylu klasycznego (żabka). Ze względu na wysoki poziom zaawansowania kursantów, poszczególne zadania pływackie będą wykonywane na dłuższych dystansach z organiczemien użycia sprzętu wypornościowego. ',
  },
  {
    name: 'Dorośli',
    age: '18-99 lat',
    icon: DorosliIcon,
    list: [
      'Wielkość grupy 6 kursantów',
      'Czas zajęć 45 minut',
      'Instruktor prowadzi zajęcia z brzegu lub z wody w zależności od potrzeb kursantów',
    ],
    description:
      'Zajęcia dla osób dorosłych bez ograniczeń wiekowych! Grupa przeznaczona jest dla osób dorosłych rozpoczynających naukę pływania. Na zajęciach odnajdą się zarówno osoby, które wcześniej nie miały okazji korzystać z basenu i wymagają pracy od tak zwanego “0” jak i Ci, którzy potrafią przemieszczać się w wodzie “po swojemu”. :)  Celem zajęć w tej grupie jest oswojenie kursantów ze środowiskiem wodnym oraz nauka pływania stylami symetrycznymi grzbiet oraz kraul.',
  },
  {
    name: 'Indywidualne',
    age: '',
    icon: IndywidualneIcon,
    list: [
      'Zajęcia instruktor + kursant',
      'Czas trwania 45 minut',
      'Instruktor prowadzi zajęcia z brzegu lub z wody w zależności od potrzeb kursanta',
    ],
    description:
      'Zajęcia, na których instruktor jest do całkowitej dyspozycji kursanta. Ta forma zajęć sprawdzi się szczególnie w przypadku osób, które mają problem z opanowaniem jakiegoś zadania pływackiego lub z jakiegoś powodu nie odnajdują się na zajęciach grupowych. Będzie to również doskonała opcja dla osób, które chciałyby, aby instruktor w stu procentach skupił się na celach kursanta.',
  },
  {
    name: 'Dwuosobowe',
    age: '',
    icon: DwuosoboweIcon,
    list: [
      'Instruktor + dwójka kursantów',
      'Czas trwania 45 minut',
      'Instruktor prowadzi zajęcia z brzegu lub z wody w zależności od potrzeb kursanta',
    ],
    description:
      'Zajęcia, na których instruktor jest do całkowitej dyspozycji dwóch kursantów. Ta forma zajęć, podobnie jak w przypadku lekcji indywidualnej sprawdzi się szczególnie w przypadku osób, ceniących sobie kameralne warunki pracy. :) Zajęcia w tej formie dadzą najlepsze efekty, jeśli uczestnicy zajęć są w podobnym wieku i posiadają podobne umiejętności pływackie.',
  },
];
