import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/Store.js";

const clerkPubKey = "pk_test_Y2xvc2luZy1iZWFyLTM3LmNsZXJrLmFjY291bnRzLmRldiQ";
let queryClient= new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </Provider>
      
    </ClerkProvider>
  </StrictMode>
);
