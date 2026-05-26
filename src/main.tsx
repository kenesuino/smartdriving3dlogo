import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../3dlogo';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
