import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./Pages/UserProfile";

import Main from "./Pages/MainPage";
import hashtagPage from "./Pages/hashtagPage";
import Header from './Layouts/Header'
import Posts from "./Pages/PostsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/home" element={<Main />} />
        <Route path="/hashtag/:hashtag" element={<hashtagPage />} />
      </Routes>
    </BrowserRouter>
  );
}
