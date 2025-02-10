import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('topics').select('*');

      if (data) {
        setData(data);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return <div className='border'></div>;
};
