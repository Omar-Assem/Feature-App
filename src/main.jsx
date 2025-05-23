import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from "@clerk/clerk-react";
import './index.css';
import App from './App.jsx';

// import Product from './Pages/Product/Product.jsx';

const clerkPubKey = "pk_test_Y2xvc2luZy1iZWFyLTM3LmNsZXJrLmFjY291bnRzLmRldiQ";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
