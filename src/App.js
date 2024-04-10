import React from "react";
import LoginForm from "./User/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupForm from "./User/SignupForm.js";
import MainPage from "./Page/Main.js";
import ChatPage from "./Chat/Chatpage.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignupForm/>} />
          <Route path="/" element={<MainPage/>}/>
          <Route path="/chat" element={<ChatPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
