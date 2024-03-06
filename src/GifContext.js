import React, { createContext, useState, useContext } from 'react';

const GifContext = createContext();

export function useGif() {
  return useContext(GifContext);
}

export function GifProvider({ children }) {
  const [gifUrl, setGifUrl] = useState(null);

  return (
    <GifContext.Provider value={{ gifUrl, setGifUrl }}>
      {children}
    </GifContext.Provider>
  );
}