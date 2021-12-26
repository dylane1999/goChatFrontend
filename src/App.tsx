import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ChatroomPage from "./pages/ChatroomPage";
import JoinChatroomPage from "./pages/JoinChatroomPage";

const RedirectComponent = () => {
  return (
    <>
      <Navigate to="/somewhere/else" />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<JoinChatroomPage />} />
        <Route  path="/chatroom/:teamId" element={<ChatroomPage />} />
        <Route  element={<RedirectComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
