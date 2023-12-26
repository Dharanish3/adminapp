import React from "react";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";
import Class from "./Component/Class";
import Query from "./Component/Query";
import User from "./Component/User";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/class" element={<Class />} />
            <Route path="/query" element={<Query />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Navigate to = '/' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
