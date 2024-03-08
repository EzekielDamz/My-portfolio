import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Submit from "../components/FormSuccessful";
import React from "react";
import Mainpage from "../pages/Mainpage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
