import { createContext, useContext, useState } from 'react';

const SearchFieldContext = createContext();
export const useSearch = () => useContext(SearchFieldContext);

export const SearchFieldProvider = ({ children }) => {
  const [searchField, setSearchField] = useState('');

  return (
    <SearchFieldContext.Provider value={{ searchField, setSearchField }}>
      {children}
    </SearchFieldContext.Provider>
  );
};
