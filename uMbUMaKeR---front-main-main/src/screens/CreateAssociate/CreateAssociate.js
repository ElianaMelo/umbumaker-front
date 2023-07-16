import React from "react";


import { Dropdown } from 'primereact/dropdown';

import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

import AssociateService from "../../services/AssociateService";
import MenuLeft from "../../components/Menu/MenuLeft";
import './CreateAssociate.css'

export default class CreateAssociate extends React.Component{
    
    state = {
        items:[{ label: 'Associados', url:"/associates" }, { label: 'Cadastrar'}],

        home: {icon: 'pi pi-home ', url: '/' },

        status: [
            {stt:'ATIVO'},{stt:'NÃO ATIVO'}
        ],
        associados: [
            {tipo:'TUTOR'},{tipo:'GRESTOR'}
        ],
        estado:{stt:''},
        associado:{tipo:''},

        
            nome:'',
            email:'',
            password:'',
            telefone:'',
            linkWhatsapp:'',
            qrCode:''
        
    }

    constructor(){
        super();
        this.service = new AssociateService();
    }


    save = () =>{
        this.service.creat(
             {
            nome:this.state.nome,
            email:this.state.email,
            password:this.state.password,
            telefone: this.state.telefone,
            linkWhatsapp:this.state.linkWhatsapp,
            estado:this.state.status.stt,
            associado:this.state.associados.tipo, 
            qrCode:this.state.qrCode
        
        }
        ).then(response =>{
            console.log(this.state.associate)
            alert("Salvo")
            window.location.href = `/associates`;
        }).catch(error =>{
            console.log(error.response)
        })
    }

    teste = () =>{
        console.log(this.state.nome);
        console.log(this.state.email);
        console.log(this.state.telefone)
        console.log(this.state.linkWhatsapp);
        console.log(this.state.password);
        console.log(this.state.associado);
        console.log(this.state.estado);
        console.log(this.state.qrCode);
        
    }

    render(){
        return(
            <>
           <MenuLeft/>
            <div className="container">
                <div className="header">
                    <div className="header">
                        <BreadCrumb model={this.state.items} home={this.state.home}></BreadCrumb>
                    </div>
                </div>
                <br/><br/>
                <label htmlFor="nome">Nome</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText className="borderColorEdit" type="text"  
                        onChange={(e) => { this.setState({nome: e.target.value }) }}/>
                    </div>
                </div>
                <br/>
                <label htmlFor="nome">E-mail</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText className="borderColorEdit" type="text" 
                        onChange={(e) => { this.setState({email: e.target.value }) }}/>
                    </div>
                    
                </div>
                <br/>
                <label htmlFor="nome">Telefone</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText type="text" 
                        onChange={(e) => { this.setState({telefone: e.target.value }) }}/>
                    </div>
                                       
                </div>
                <br/>
                <label htmlFor="password">Senha</label>
                <div className="input-texts">                    
                    <div className="input-dois">
                        <InputText type="password"onChange={(e) => { this.setState({senha: e.target.value }) }}/>
                    </div>
                </div>
                <br/>
                <label htmlFor="nome">Link do Whatsapp</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText  type="text"
                        onChange={(e) => { this.setState({linkWhatsapp: e.target.value }) }}/>
                    </div>
                    
                </div>
                <br/>
                <div className="input-texts">
                        <Dropdown id="seletor" 
                        value={this.state.estado} 
                        onChange={(e) => this.setState({estado: this.estado = e.value})} 
                        options={this.state.status} 
                        optionLabel="stt" 
                        placeholder="Status"/>
                </div>
                <br/>
                <div className="input-texts">
                        <Dropdown id="seletor" 
                        value={this.state.associado} 
                        onChange={(e) => this.setState({associado: this.associado = e.value})} 
                        options={this.state.associados} 
                        optionLabel="tipo" 
                        placeholder="Associado"/>
                </div>
                <br/>

                <div className="bts">
                    <div className="bt-save">
                        <Button className="bt" label="SALVAR" onClick={this.save} />
                    </div>
                    <div className="bt-cancel">
                         <Button className="bt" label="CANCELAR" onClick={this.teste} />
                    </div>
                </div>
                    
            </div>
            
            </>
        )
    }
}