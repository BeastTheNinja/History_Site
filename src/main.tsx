import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routing } from './router/Routes'
import { DarkModeProvider } from "./components/context/darkmodeContextProvider"
import './assets/styles/tailwind.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
    <Routing />
    </DarkModeProvider>
  </StrictMode>,
)
