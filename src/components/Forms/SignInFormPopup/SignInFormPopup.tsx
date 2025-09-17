'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import z from 'zod';
import SendIcon from '@/public/assets/icons/send-white.svg';
import Image from 'next/image';

const schema = z.object({
  name: z.string().min(3, 'Minimalna długość wynosi 3 znaków'),
  email: z.email('Niepoprawny email').min(4),
  telephone: z
    .string('niepoprawna wartość')
    .min(9, 'Numer telefonu powinien składać się z min 9 cyfr'),
});

type FormFields = z.infer<typeof schema>;

interface SignInFormPopupProps {
  day?: string;
  hours?: string;
  groupName?: string;
  onHide: () => void;
}
export const SignInFormPopup = ({
  day,
  hours,
  groupName,
  onHide,
}: SignInFormPopupProps) => {
  const [status, setStatus] = useState('Wyślij zgłoszenie');
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: {errors},
  } = useForm<FormFields>({
    defaultValues: {
      name: '',
      telephone: '',
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const {name, telephone, email} = data;
    try {
      setStatus('Wysyłanie...');
      const res = await fetch('/api/sign-in', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name,
          telephone,
          email,
          day,
          hours,
          groupName,
        }),
      });

      if (!res.ok) {
        setStatus('Błąd wysyłania');
        if (res.status === 401) {
          throw new Error('Wrong login or password');
        }
        throw new Error('Server error, try again later');
      }
      setStatus('Wiadomość wysłana');

      setTimeout(() => {
        setStatus('Wyślij zgłoszenie');
        reset();
        onHide();
      }, 3000);
      return res.json();
    } catch (error) {
      console.log(error);
      setError('root', {
        message: `${String(error).replace('Error:', '')}`,
      });
    }
  };

  return (
    <>
      <span className="xl:w-[40%] sm:w-[400px] w-[80%] text-[20px] text-center">
        Zapisujesz się na zajęcia w{' '}
        <span className="text-[20px] font-bold text-orange">{day}</span> w
        godzinach{' '}
        <span className="text-[20px] font-bold text-orange">{hours}</span> na
        grupę{' '}
        <span className="text-[20px] font-bold text-orange">{groupName}</span>
      </span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-fit flex flex-col justify-center items-center"
      >
        <div className=" flex flex-col lg:flex-row justify-center w-full lg:gap-6 gap-0 items-center">
          <div className="flex flex-col xl:pr-[50px] xl:w-[40%] sm:w-[400px] w-[80%]">
            <label className="flex p-2.5 pb-1">Imię</label>
            <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full py-2.5 gap-3 pl-2.5">
              <input
                {...register('name')}
                type="text"
                className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] "
                placeholder="Imię*"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 pl-2.5 !text-sm">
                {errors.name.message}
              </p>
            )}

            <label className="flex p-2.5 pb-1">E-mail</label>
            <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full py-2.5 gap-3 pl-2.5">
              <input
                {...register('email')}
                type="text"
                className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] "
                placeholder="E-mail"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 pl-2.5 !text-sm">
                {errors.email.message}
              </p>
            )}
            <label className="flex p-2.5 pb-1">Telefon</label>
            <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full py-2.5 gap-3 pl-2.5">
              <input
                {...register('telephone')}
                type="text"
                className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] "
                placeholder="Telefon*"
              />
            </div>
            {errors.telephone && (
              <p className="text-red-500 pl-2.5 !text-sm">
                {errors.telephone.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="transition-all duration-500 group hover:bg-white hover:text-orange border-2 cursor-pointer mt-8 w-fit font-semibold flex flex-row text-[14px] gap-2 sm:text-[16px] px-9 py-3 items-center  bg-orange rounded-[25px] text-white justify-center"
        >
          {status}{' '}
          <span className="transition-all duration-500 group-hover:bg-orange flex items-center justify-center p-1.5 rounded-full">
            <Image
              src={SendIcon}
              alt="Wyślij e-mail"
              width={16}
              height={16}
              className=" "
            />
          </span>
        </button>
      </form>
    </>
  );
};
