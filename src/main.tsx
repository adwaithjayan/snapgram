import {createRoot} from 'react-dom/client'
import App from './app'
import { BrowserRouter } from 'react-router-dom';

import "./globals.css";
import { QueryProvider } from './lib/react-query/queryProvider';
import { AuthProvider } from './context/authContext';


createRoot(document.getElementById('root')!).render(
<BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
)