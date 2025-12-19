import "./styles/global.css";
import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Header } from "./layouts/Header";
import { FilterContextProvider } from "./contexts/Filter-context"; 

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FilterContextProvider> 
            <Header />
            <App />
        </FilterContextProvider>
    </StrictMode>
);