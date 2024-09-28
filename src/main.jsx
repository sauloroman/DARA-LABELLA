import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Invitation } from './Invitation.jsx'
import './scss/app.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Invitation />
  </StrictMode>
)
