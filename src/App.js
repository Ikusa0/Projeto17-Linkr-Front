import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./Pages/UserProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
