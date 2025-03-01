import { BrowserRouter, Route, Routes } from "react-router";
import App from "../../App";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
