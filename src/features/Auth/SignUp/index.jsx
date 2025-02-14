import React, { useState } from 'react';
import { supabase } from '../../../supabase/client';
import { Link, useNavigate } from 'react-router';

export default ({ setIsAuth }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          },
        },
      });
      if (!data?.session?.access_token) {
        alert(error);
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        setIsAuth(data);
        navigate('/');
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-[#003049] p-5 flex flex-col gap-5 w-3/12 rounded-md'
      >
        <input
          type='text'
          onChange={handleChange}
          name='name'
          className='p-2 outline-none text-lg'
          placeholder='Ism'
          id=''
        />
        <input
          type='text'
          onChange={handleChange}
          name='email'
          className='p-2 outline-none text-lg'
          id=''
          placeholder='Email'
        />
        <input
          type='text'
          onChange={handleChange}
          name='password'
          id=''
          className='p-2 outline-none text-lg'
          placeholder='Parol'
        />
        <div className='flex flex-col items-center gap-4 text-lg'>
          <button
            type='submit'
            className='p-2 bg-[#fdf0d5] w-44 hover:opacity-[0.9] transition-all'
          >
            Ro'yhatdan o'tish
          </button>
          <Link to='/login'>
            <p className='text-white underline cursor-pointer'>
              Ro'yhatdan o'tganman
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};
