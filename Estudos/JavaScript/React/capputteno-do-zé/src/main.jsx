import "./styles/global.css"
import { StrictMode } from "react"
import App from "./App"
import { createRoot } from "react-dom/client"
import { Header } from "./layouts/Header"
import { FilterContext } from "./contexts/Filter-context"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterContext>
      <Header />
      <App />
    </FilterContext>
  </StrictMode>
)