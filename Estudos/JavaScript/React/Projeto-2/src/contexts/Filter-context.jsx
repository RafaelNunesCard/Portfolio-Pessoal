import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export function FilterContextProvider({ children }) {
  const [type, setType] = useState("ALL");

  return (
    <FilterContext.Provider value={{ type, setType }}>
      {children}
    </FilterContext.Provider>
  );
}