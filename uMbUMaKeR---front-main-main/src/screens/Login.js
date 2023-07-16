
import React from "react";
//import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import './Login.css'

export default function Login() {

    return (
        <div className="container-login">
            <div className="left-login">
                
                <div className="imagem">
                    <img src="logo.png" alt="Logo-UmBuMaKeR" />
                </div>
                <a href="http://localhost:8080/contasacesso" >
                     <Button className="bt-login" severity="warning"  label="Login Google">
                     </Button>               
                </a>
            </div>
             
        </div>
        

    )
}
