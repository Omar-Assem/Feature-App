import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux"; // استيراد الـ Provider
// استيراد الـ store
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/Store.js";

const clerkPubKey = "pk_test_Y2xvc2luZy1iZWFyLTM3LmNsZXJrLmFjY291bnRzLmRldiQ";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Provider store={store}>
        <App />
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
