import React from "react";
import LoginForm from "./User/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupForm from "./User/SignupForm.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/signup" element={<SignupForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
