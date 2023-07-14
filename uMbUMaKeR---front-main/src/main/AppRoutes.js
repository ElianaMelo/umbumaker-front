import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "../screens/Home";
import Login from "../screens/Login";

import UpdateAssociate from "../screens/UpdateAssociate/UpdateAssociate";
import CreateAssociate from "../screens/CreateAssociate/CreateAssociate";
import ListAssociate from "../screens/ListarColaboradores/ListAssociate";

function AppRouts(){
    return(
        <Router>
           <Routes>
                <Route  path="/" element={<Home/>} exact ></Route>
                <Route  path="/login" element={<Login/>} exact ></Route>

                <Route element={<ListAssociate/>} path="/associates"></Route>
                <Route element={<CreateAssociate/>} path="/createAssociate"></Route>
                <Route element={<UpdateAssociate/>} path="/updateAssociate/:id"></Route>
                
           </Routes>
        </Router>
    )
}

export default AppRouts;