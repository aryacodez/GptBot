import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import Chatter from "./pages/Chat/chatter";
import Extractor from "./pages/extractor/extract";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/chat" element={<Chatter />} />
        <Route exact path="/scraper" element={<Extractor />} />
      </Routes>
    </>
  );
};

export default App;
