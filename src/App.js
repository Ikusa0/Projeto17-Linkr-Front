import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import GlobalCss from "./Assets/Styles/GlobalCss";

import Main from "./Pages/MainPage.js";
// import hashtagPage from "./Pages/hashtagPage";
// import Header from './Layouts/Header'
// import Posts from "./Pages/PostsPage";
import SignIn from "../src/Pages/SignIn";
import SignUp from "../src/Pages/SignUp";
import UserContext from './Pages/UserContext.js';



export default function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [data,setData]=useState(null);

  return (
    <UserContext.Provider value={{data,setData}}>
    <BrowserRouter>
    <GlobalCss />
      <Routes>
      <Route
          path="/sign-up"
          element={
            <SignUp
              login={(login) => setLogin(login)}
              password={(password) => setPassword(password)}
            />
          }
        />
        <Route path="/" element={<SignIn login={login} password={password} />} />
        <Route path="/home" element={<Main />} />
        {/*
        <Route path="/post" element={<Posts />} />
        <Route path="/hashtag/:hashtag" element={<hashtagPage />} />
         */}
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}
