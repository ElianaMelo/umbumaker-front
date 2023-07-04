import React from "react";
import {Route, BrowserRouter} from "react-router-dom";

import TelaCadastro from "../screens/TelaCadastro/TelaCadastro";
import TelaEditar from "../screens/TelaEditar/TelaEditar";
import TelaListar from "../screens/TelaListar/TelaListar";
import TelaLogin from "../screens/TelaLogin/TelaLogin";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={TelaCadastro} path="/TelaCadastro"/>
            <Route component={TelaListar} path="/TelaListar"/>
            <Route component={TelaEditar} path="/TelaEditar"/>
            <Route component={TelaLogin} path="/TelaLogin"/>
        </BrowserRouter>
    )
}

export default AppRoutes;