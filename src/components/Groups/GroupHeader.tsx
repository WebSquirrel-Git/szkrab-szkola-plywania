'use client';
import Icon from '@/public/assets/groups/szkraby.svg';
import Image from 'next/image';
export const GroupHeader = () => {
  return (
    <div className="flex flex-row gap-4">
      <Image src={Icon} alt="" width={125} height={125} />
      <div className="flex flex-col justify-center gap-3">
        <span className="px-12 py-1 rounded-full bg-gradient-to-r from-mint to-aqua text-white">
          <h3>Szkraby</h3>
        </span>
        <span className="w-fit px-12 py-1 rounded-full bg-gradient-to-r from-mint to-aqua text-white">
          3-4 lata
        </span>
      </div>
    </div>
  );
};
