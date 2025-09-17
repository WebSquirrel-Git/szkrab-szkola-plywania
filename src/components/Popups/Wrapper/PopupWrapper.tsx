'use client';

import {createPortal} from 'react-dom';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import CloseIcon from '@/public/assets/icons/close-circle-orange.svg';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function PopupWrapper({isOpen, onClose, children}: PopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="z-[9999] fixed left-0 top-0 w-full h-screen bg-white/99 flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="z-[9999] cursor-pointer absolute right-12 top-12"
      >
        <Image
          src={CloseIcon}
          alt="zamknij"
          width={64}
          height={64}
          loading="eager"
        />
      </button>
      {children}
    </div>,
    document.body
  );
}
