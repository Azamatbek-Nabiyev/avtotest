import React from 'react';

export default () => {
  return (
    <div className='p-4 container mx-auto'>
      <p className='text-center text-4xl font-bold my-8 text-[#fdf0d5]'>
        Obuna turlari
      </p>
      <div className='flex justify-between'>
        <div className='p-10 h-auto w-5/12 shadow-2xl bg-[#003049] rounded-lg text-white flex flex-col justify-between'>
          <div>
            <p className='text-2xl text-[#fdf0d5] font-bold'>
              Premium imkoniyatlar
            </p>
            <ul className='my-10 text-lg flex flex-col gap-4'>
              <li>1. Mavzulashtirilgan testlar</li>
              <li>2. Mavzulashtirilgan testlar bo'yicha trenirofka</li>
              <li>3. Orqali nazorat</li>
              <li>4. Random test</li>
            </ul>
          </div>
          <button className='border border-gray-300 px-2 mt-5 w-52 h-11 hover:bg-white hover:text-black transition-all cursor-pointer'>
            Obuna bo'lish
          </button>
        </div>
        <div className='p-10 px-10 h-auto w-5/12 shadow-2xl bg-[#003049] rounded-lg text-white flex flex-col justify-between'>
          <div>
            <p className='text-2xl text-[#fdf0d5] font-bold'>
              Tekin imkoniyatlar
            </p>
            <ul className='my-10 text-lg flex flex-col gap-4'>
              <li>1. Biletlar bo'yicha trenirofka</li>
              <li>2. Xato javob bergan savollaringiz ro'yhati</li>
              <li>3. Imtihon topshirish</li>
            </ul>
          </div>
          <button className='border border-gray-300 px-2 mt-5 w-52 h-11 hover:bg-white hover:text-black transition-all cursor-pointer'>
            Kirish
          </button>
        </div>
      </div>

      <div className='w-full flex justify-center mt-10'>
        <div className='bg-[#003049] p-5 w-4/12 text-white text-lg flex flex-col gap-3'>
          <p>
            <span className='text-xl mr-2'>Obuna tugash vaqti:</span>
            <span className='text-[#fdf0d5]'>2025-yil 30-fevral</span>
          </p>
          <p>
            <span className='text-xl mr-2'>Taklif va shikoyatlar uchun:</span>
            <span className='text-[#fdf0d5]'>@Azamat_Nabiyev</span>
          </p>
          <p>
            <span className='text-xl mr-2'>Telegram kanalimiz:</span>
            <span className='text-[#fdf0d5]'>@Azamat_Nabiyev</span>
          </p>
        </div>
      </div>
    </div>
  );
};
