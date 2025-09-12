'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import SendIcon from '@/public/assets/icons/send-white.svg';
import Image from 'next/image';

const schema = z.object({
  name: z.string().min(3, 'Minimalna długość wynosi 3 znaków'),
  email:z.email('Niepoprawny email').min(4),
  telephone: z.string('niepoprawna wartość').min(9,'Numer telefonu powinien składać się z min 9 cyfr'),
  lessonType:z.enum(['Grupowe','Indywidualne','Dwuosobowe']),
  swimmingSkill:z.enum(['Początkująca','Średniozaawansowana','Zaawansowana']),
  age:z.number().min(3,'Minimalny wiek uczestnika to 3 lata').max(99,'Maksymalny wiek uczestnika to 99 lat')
});


type FormFields = z.infer<typeof schema>;

export const ContactForm = () =>{
 const [status, setStatus] = useState('Wyślij wiadomość');
  const {
    register,
    handleSubmit,
    setError,reset,
    formState: {errors},
  } = useForm<FormFields>({
    defaultValues: {
      name: '',
      telephone: '',
      email:'',
      lessonType:'Grupowe',
      swimmingSkill:'Początkująca',
      age:undefined
    },
    resolver: zodResolver(schema),
  });

   const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const {name,telephone,email,lessonType,swimmingSkill,age} = data
    try {
        setStatus('Wysyłanie...')
        const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name,telephone,email,lessonType,swimmingSkill,age}),
  });

  if (!res.ok) {
    setStatus('Błąd wysyłania')
    if (res.status === 401) {
      throw new Error('Wrong login or password');
    }
    throw new Error('Server error, try again later');
  }
 setStatus('Wiadomość wysłana')
  
    setTimeout(()=>{
        setStatus('Wyślij wiadomość');
        reset();
    },3000)
  return res.json();
} catch (error) {
      console.log(error);
      setError('root', {
        message: `${String(error).replace('Error:', '')}`,
      });
    }
   
  };

    return <form onSubmit={handleSubmit(onSubmit)} className='w-full h-fit'>
        <label className='flex p-2.5 pb-1'>Imię</label>
        <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full py-2.5 gap-3 pl-2.5">
         
          <input
            {...register('name')}
            type="text"
            className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] "
            placeholder="Imię*"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 pl-2.5 !text-sm">{errors.name.message}</p>
        )}
       
         <label className='flex p-2.5 pb-1'>E-mail</label>
        <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full py-2.5 gap-3 pl-2.5">
         
          <input
            {...register('email')}
            type="text"
            className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] "
            placeholder="E-mail"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 pl-2.5 !text-sm">{errors.email.message}</p>
        )}
         <label className='flex p-2.5 pb-1'>Telefon</label>
        <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full py-2.5 gap-3 pl-2.5">
         
          <input
            {...register('telephone')}
            type="text"
            className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] "
            placeholder="Telefon*"
          />
        </div>
        {errors.telephone && (
          <p className="text-red-500 pl-2.5 !text-sm">{errors.telephone.message}</p>
        )}
        <label className='flex p-2.5 pb-1'>Wiek uczestnika</label>
        <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full py-2.5 gap-3 pl-2.5">
         
          <input
            {...register('age',{valueAsNumber:true})}
            type="number"
            className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] "
            placeholder="Wiek uczestnika"
          />
        </div>
        {errors.age && (
          <p className="text-red-500 pl-2.5 !text-sm">{errors.age.message}</p>
        )}
         <label className='flex p-2.5 pb-1'>Rodzaj zajęć</label>
          <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full  gap-3 px-2.5">
         <select {...register('lessonType')} className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] h-full">
            <option value='Grupowe'>Grupowe</option>
            <option value='Indywidualne'>Indywidualne</option>
            <option value='Dwuosobowe'>Dwuosobowe</option>
         </select>
         </div>
         {errors.lessonType && (
          <p className="text-red-500 pl-2.5 !text-sm">{errors.lessonType.message}</p>
        )}
         <label className='flex p-2.5 pb-1'>Poziom grupy</label>
          <div className="w-full h-10 flex flex-row items-center justify-center border-1 border-mint rounded-full  gap-3 px-2.5">
         <select {...register('swimmingSkill')} className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] h-full">
            <option value='Początkująca'>Początkująca</option>
            <option value='Średniozaawansowana'>Średniozaawansowana</option>
            <option value='Zaawansowana'>Zaawansowana</option>
         </select>
         </div>
         {errors.lessonType && (
          <p className="text-red-500 pl-2.5 !text-sm">{errors.lessonType.message}</p>
        )}
        <button type='submit' className='cursor-pointer mt-8 w-full font-semibold flex flex-row text-[14px] gap-2 sm:text-[16px] px-9 py-3 items-center  bg-orange rounded-[25px] text-white justify-center'>
            {status} <Image src={SendIcon} alt='Wyślij e-mail' width={16} height={16}/>
           
        </button>
    </form>
}