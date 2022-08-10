import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Main from "./Pages/MainPage";
import hashtagPage from "./Pages/hashtagPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/hashtag/:hashtag" element={<hashtagPage />} />
      </Routes>
    </BrowserRouter>
  );
}
