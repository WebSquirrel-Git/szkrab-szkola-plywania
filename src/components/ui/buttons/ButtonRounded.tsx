'use client';

interface ButtonRoundedProps {
  label: string;
  onClick: () => void;
}

export const ButtonRounded = ({label, onClick}: ButtonRoundedProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer transition-all duration-500 sm:hover:bg-white sm:hover:text-orange sm:hover:text-[18px] border-2 border-orange w-fit font-semibold flex text-[14px] sm:text-[16px] px-9 py-3 items-center  bg-orange rounded-[25px] text-white justify-center"
    >
      {label}
    </button>
  );
};
