import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { vehicleData } from '../constants/mock/vehicleData';

export const AppContext = createContext<any>(null);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<object>(vehicleData);

  const getData = async () => {
    setIsLoading(true);
    let urlString = '';

    try {
      const response = await api.get(urlString);
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        data,
        setData,
        getData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};