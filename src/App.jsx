import React, { useState } from "react";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";
import Class from "./Component/Class";
import Query from "./Component/Query";
import Adduser from "./Component/Adduser";
import Edituser from "./Component/Edituser";
import User from "./Component/User";

import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";

function App() {
  const [user,setUser] = useState([{
    id : 1,
    name : "Dharanish",
    mobile : "6382617437",
    email : "dharanishsk9698@gmail.com",
    department : "Mechanical",
  },
  {
    id : 2,
    name : "Abi",
    mobile : "6382617437",
    email : "abi9698@gmail.com",
    department : "ECE",
  },
  {
    id : 3,
    name : "Vikram",
    mobile : "6382617437",
    email : "vikram9698@gmail.com",
    department : "EEE",
  },
  {
    id : 4,
    name : "Manoj",
    mobile : "6382617845",
    email : "manoj9698@gmail.com",
    department : "EEE",
  },
])
  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />

          <Routes>
            <Route path="/" element={<Dashboard user={user} setUser={setUser} />} />
            <Route path="/add-user" element={<Adduser user={user} setUser={setUser}/>} />
            <Route path="/edit-user/:id" element={<Edituser user={user} setUser={setUser} />} />
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
