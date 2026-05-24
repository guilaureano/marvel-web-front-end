import App from '@/app/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <App />
    </main>
  </StrictMode>
);
