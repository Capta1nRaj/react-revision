import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MoneyState from './hooks/004-useContext/MoneyState.tsx'
createRoot(document.getElementById('root')!).render(
  <MoneyState>
    <App />
  </MoneyState>,
)
