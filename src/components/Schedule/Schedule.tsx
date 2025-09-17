'use client';

import {useEffect, useState} from 'react';
import {SignInFormPopup} from '../Forms/SignInFormPopup/SignInFormPopup';
import {PopupWrapper} from '../Popups/Wrapper/PopupWrapper';

const dniTygodnia: Record<number, string> = {
  0: 'Niedziela',
  1: 'Poniedziałek',
  2: 'Wtorek',
  3: 'Środa',
  4: 'Czwartek',
  5: 'Piątek',
  6: 'Sobota',
};

interface HarmonogramItem {
  id: number;
  dzien_tygodnia: string;
  start_zajec: string;
  koniec_zajec: string;
  nazwa_zajec: string;
  wolne_miejsca: string;
  prowadzacy: string;
}

interface HarmonogramItemUpdated {
  id: number;
  dzien_tygodnia: string;
  start_zajec: string;
  koniec_zajec: string;
  nazwa_zajec: string;
  wolne_miejsca: string;
  prowadzacy: string;
  dzienNazwa: string;
}

interface FormData {
  day: string;
  hours: string;
  groupName: string;
}

export const Schedule = () => {
  const [rows, setRows] = useState<HarmonogramItemUpdated[]>([]);
  const [showForm, setShowForm] = useState<{
    status: boolean;
    formData: FormData | null;
  }>({
    status: false,
    formData: null,
  });

  const onShowForm = (formData: HarmonogramItemUpdated) => {
    setShowForm({
      status: true,
      formData: {
        day: formData.dzienNazwa,
        hours: `${formData.start_zajec.split(':').slice(0, 2).join(':')} - ${formData.koniec_zajec.split(':').slice(0, 2).join(':')}`,
        groupName: formData.nazwa_zajec,
      },
    });
  };
  const onHideForm = () => {
    setShowForm({
      status: false,
      formData: null,
    });
  };

  useEffect(() => {
    fetch('/api/harmonogram')
      .then((res) => res.json())
      .then((data) => {
        const dataToMap: (HarmonogramItem & {dzienNazwa: string})[] = data.map(
          (item: HarmonogramItem) => ({
            ...item,
            dzienNazwa: dniTygodnia[new Date(item.dzien_tygodnia).getDay()],
          })
        );
        setRows(dataToMap || []);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col w-full gap-2">
        {rows.length === 0 && (
          <span className="w-full text-center text-[48px] text-orange">
            Ładowanie ...
          </span>
        )}
        {rows.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col md:flex-row border-orange border-2 rounded-[15px] md:px-2 lg:px-4 md:py-4 px-6 py-6 justify-between items-start md:items-center md:gap-1 gap-2"
          >
            {item.wolne_miejsca.includes('0') && (
              <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full bg-black/60 rounded-[13px] text-orange font-bold text-[32px] sm:text-[48px]">
                BRAK MIEJSC
              </div>
            )}
            <div className="flex flex-col 2xl:gap-4 md:gap-4 gap-1 xl:px-8 md:px-4 md:py-4 ">
              <span className="2xl:text-[20px] lg:text-[16px] md:text-[16px] text-[20px] font-bold text-orange">
                {item.dzienNazwa}
              </span>
              <span className="2xl:text-[20px] text-[16px] font-bold">
                {item.start_zajec.split(':').slice(0, 2).join(':')} -{' '}
                {item.koniec_zajec.split(':').slice(0, 2).join(':')}
              </span>
            </div>
            <span className="xl:w-[200px] md:w-[120px] w-auto 2xl:text-[20px] md:text-[16px] text-[20px]">
              {item.nazwa_zajec}
            </span>
            <div className="flex flex-col 2xl:gap-4 md:gap-4 gap-1 xl:px-8 md:px-4 md:py-4 ">
              <span className="2xl:text-[20px] lg:text-[16px] text-[16px] font-bold text-orange">
                Prowadzący
              </span>
              <span className="2xl:text-[20px] py-2 text-[16px] font-medium">
                {item.prowadzacy}
              </span>
            </div>
            <div className="flex flex-col 2xl:gap-4 md:gap-3 gap-1 xl:px-8 md:px-4 md:py-4 ">
              <span className="2xl:text-[20px] lg:text-[16px] text-[16px] font-bold text-orange">
                Wolne miejsca
              </span>
              <span
                className={`flex py-2 xl:px-8 px-4 w-full ${item.wolne_miejsca.includes('0') ? 'bg-orange' : 'bg-green-600'} rounded-[15px] 2xl:text-[20px] text-[16px] font-medium text-white justify-center`}
              >
                {item.wolne_miejsca}
              </span>
            </div>
            <button
              onClick={() => onShowForm(item)}
              className="md:w-fit w-full transition-all duration-500 cursor-pointer px-8 py-2 bg-orange rounded-[15px] text-white font-semibold border-2 md:hover:bg-white md:hover:text-orange border-orange"
            >
              Zapisz się
            </button>
          </div>
        ))}
      </div>

      {showForm.status && (
        <PopupWrapper isOpen={showForm.status} onClose={onHideForm}>
          <SignInFormPopup {...showForm.formData} onHide={onHideForm} />
        </PopupWrapper>
      )}
    </>
  );
};
