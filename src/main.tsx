import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routing } from './router/Routes'
import './assets/styles/tailwind.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
