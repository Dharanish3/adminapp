import React from "react";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";
import Class from "./Component/Class";
import Query from "./Component/Query";
import Adduser from "./Component/Adduser";
import Edituser from "./Component/Edituser";
import User from "./Component/User";
import UserContext from "./utils/UserContext";

import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";

function App() {
 

  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />
          
            <Routes>
              <Route path="/" element={<UserContext><Dashboard /></UserContext>} />
              <Route path="/add-user" element={<UserContext><Adduser/></UserContext>} />
              <Route path="/edit-user/:id" element={<UserContext><Edituser /></UserContext>} />
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
