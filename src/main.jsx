import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./context/MainContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MainProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainProvider>
  // </StrictMode>
);
