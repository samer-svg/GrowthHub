"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Get the stored preference or default to dark mode
      const storedPreference = localStorage.getItem('darkMode');
      const initialDarkMode = storedPreference !== null ? JSON.parse(storedPreference) : true;
      setDarkMode(initialDarkMode);
      
      // Ensure dark mode is applied immediately
      const root = window.document.documentElement;
      if (initialDarkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
        localStorage.setItem('darkMode', 'true');
      } else {
        root.classList.remove("dark");
        localStorage.setItem('darkMode', 'false');
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("useDarkMode must be used within DarkModeProvider");
  return context;
}
