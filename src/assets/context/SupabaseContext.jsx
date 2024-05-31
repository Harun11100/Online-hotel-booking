// src/context/SupabaseContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';
import supabase from './supabase';


const SupabaseContext = createContext();



export const SupabaseProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('cabins').select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <SupabaseContext.Provider value={{ data, loading }}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => useContext(SupabaseContext);
