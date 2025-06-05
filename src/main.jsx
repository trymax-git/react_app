import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/career.css'
import './styles/track.css'
import './styles/contacts.css'
import './styles/home.css'
import './styles/engineer.css'
import './styles/tadviser.css'
import './styles/thanks.css'
import './styles/onecdo.css'
import './styles/kms.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App />
  </StrictMode>,
)
