'use client';
import Image, {StaticImageData} from 'next/image';

interface GroupDescriptionProps {
  name: string;
  icon: StaticImageData;
  age: string;
  description: string;
  list: string[];
}

export const GroupDescription = ({
  name,
  age,
  icon,
  description,
  list,
}: GroupDescriptionProps) => {
  return (
    <div className="flex flex-col xl:w-[40%] md:w-[80%] w-full gap-8 xl:items-start items-center xl:text-left text-center">
      <div className="flex md:flex-row flex-col justify-center items-center gap-4  xl:w-auto md:w-[350px] w-auto">
        <Image
          src={icon}
          alt={name}
          width={125}
          height={125}
          className="w-[160px] h-[160xp] sm:w-[125px] sm:h-[125px] "
        />
        <div className="flex flex-col justify-center md:items-start items-center gap-3">
          <span className="px-12 py-1 rounded-full bg-gradient-to-r from-mint to-aqua text-white">
            <h3>{name}</h3>
          </span>
          {age !== '' && (
            <span className="w-fit px-12 py-1 rounded-full bg-gradient-to-r from-mint to-aqua text-white">
              {age}
            </span>
          )}
        </div>
      </div>
      <p>{description}</p>
      {list.length > 0 && (
        <div className="flex flex-col gap-2.5 xl:items-start items-center sm:w-fit w-[90%]">
          {list.map((item, i) => (
            <span
              key={i}
              className="flex flex-row gap-2.5 items-center sm:w-fit w-full"
            >
              <span className="w-[16px]  h-[16px] hidden xl:block rounded-full bg-orange"></span>
              <p className="border-b-2 border-orange sm:py-1.5 py-0.5 sm:w-fit w-full">
                {item}
              </p>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
