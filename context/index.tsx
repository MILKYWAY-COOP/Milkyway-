import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context value
interface AppContextType {
  changeBg: () => void;
  bg: string;
}

export const AppContext = createContext<AppContextType | null>(null);

interface ApplicationProps {
  children: ReactNode;
}

export function Application({ children }: ApplicationProps) {
  const [bg, setBg] = useState('');

  const bgs = ['custom-bg', 'custom-bg2', 'custom-bg2'];

  function changeBg() {
    const random = Math.floor(Math.random() * bgs.length);
    setBg(bgs[random]);
  }

  return (
    <AppContext.Provider value={{ changeBg, bg }}>
      {children}
    </AppContext.Provider>
  );
}
