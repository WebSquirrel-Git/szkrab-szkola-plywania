'use client';
import Icon from '@/public/assets/groups/szkraby.svg';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';

interface GroupLinkProps {
  name: string;
  icon: StaticImageData;
  age: string;
}

export const GroupLink = ({name, age, icon}: GroupLinkProps) => {
  return (
    <Link
      href="/nauka-plywania#grupy"
      className="group transition-all duration-500 flex md:flex-row flex-col justify-center items-center gap-4  xl:w-auto md:w-[370px] w-auto"
    >
      <Image
        src={icon}
        alt={name}
        width={125}
        height={125}
        className="w-[160px] h-[160xp] sm:w-[125px] sm:h-[125px] "
      />
      <div className="flex flex-col justify-center md:items-start items-center gap-3">
        <span className="flex items-center justify-center w-[240px] transition-all duration-500 group-hover:from-white group-hover:to-white group-hover:text-orange border-2 px-12 py-1 rounded-full bg-gradient-to-r from-mint to-aqua text-white">
          <h3 className="group-hover:hidden w-fit">{name}</h3>
          <h3 className="hidden group-hover:flex">Sprawdź</h3>
        </span>
        {age !== '' && (
          <span className="w-fit px-12 py-1 rounded-full bg-gradient-to-r from-mint to-aqua text-white">
            {age}
          </span>
        )}
      </div>
    </Link>
  );
};
