/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { Toast } from 'primereact/toast';

import { Dropdown } from 'primereact/dropdown';

import { InputText } from "primereact/inputtext";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from 'primereact/button';

import Menu from "../../components/Menu/Menu"

import AssociateService from "../../services/AssociateService";

export default class UpdateAssociate extends React.Component{

    state = {
        items:[{ label: 'Associados', url:"/associates" }, 
        { label: 'Atualizar Cadastro'}],

        home: {icon: 'pi pi-home ', url: '/' },
        tipos: [
            {tipo:'ATIVO'},{tipo:'NÃO ATIVO'}
        ],
        estado:{nome:''},

        id:'',
        name:'',
        email:'',
        password:'',
        telefone:'',
        linkwhatsapp:'',
        qrcode:'[...]',
        toast:''
    }

    componentDidMount(){
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        this.findByid(id)
    }

    constructor(){
        super();
        this.service = new AssociateService();
        console.log(this.state.associate)
    }

    delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      };

   update  = async () =>{
    await this.service.update(this.state.id,{
        name:this.state.name,
        email:this.state.email,
        password: this.state.password,

        telefone:this.state.telefone,
        linkwhatsapp: this.state.linkwhatsapp,

        estado:this.state.estado.tipo,
       
    }).then(async (response) =>{
        this.state.toast.show({ severity: 'success', summary: 'Sucesso', detail: ' Editado Com Sucesso' });

        await this.delay(2000);
        window.location.href = `/associates`;
    })
        .catch(error =>{

            this.state.toast.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao Editar' });

            console.log(error)
        })
    }

    findByid = (id) =>{
        this.service.find(`/${id}`)
            .then(response =>{

                const associate = response.data;
                const id = associate.id;
                const name = associate.name;
                const email = associate.email;

                const passoword = associate.passoword
                const telefone = associate.telefone;
                const linkWhatsapp = associate.linkWhatsapp;

                const tipo = associate.tipo;
                const estado = associate.estado;
                const qrcode = associate.qrcode;
               

                this.setState({id:id,name:name, email:email, passoword:passoword, telefone:telefone, linkWhatsapp:linkWhatsapp,
                    tipo:tipo, estado:estado, qrcode:qrcode})
               

                console.log(this.state.associate, 'ok')
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        return(
            <>
            <Menu/>
            <div className="container">
                <div className="header">
                <Toast ref={(el) => (this.state.toast = el)} />
                    <div className="header">
                        <BreadCrumb model={this.state.items} home={this.state.home}></BreadCrumb>
                    </div>
                </div>
                
                <label >Nome</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText className="borderColorEdit" type="text"
                        onChange={(e) => { this.setState({name: e.target.value }) }}/>
                    </div>
                </div>
                
                <label >E-mail</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText className="borderColorEdit" type="text" 
                        onChange={(e) => { this.setState({email: e.target.value }) }}/>
                    </div>
                    
                </div>

                <label >Telefone</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText type="text" 
                        onChange={(e) => { this.setState({telefone: e.target.value }) }}/>
                    </div>
                                       
                </div>
                <label>Senha</label>
                <div className="input-texts">                    
                    <div className="input-dois">
                        <InputText type="password"   onChange={(e) => { this.setState({passoword: e.target.value }) }}/>
                    </div>
                </div>
                <label >Link do Whatsapp</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText  type="text"
                        onChange={(e) => { this.setState({linkWhatsapp: e.target.value }) }}/>
                    </div>
                    
                </div>
                <div className="input-texts">
                        <Dropdown id="seletor" 
                        value={this.state.estado} 
                        onChange={(e) => this.setState({estado: this.estado = e.value})} 
                        options={this.state.tipos} 
                        optionLabel="tipo" 
                        placeholder="Status" />
                </div>
               
                <div className="bts">
                    <div className="bt-save">
                        <Button className="bt" label="SALVAR" onClick={this.update} />
                    </div>
                    <div className="bt-cancel">
                         <Button className="bt" label="CANCELAR" />
                    </div>
                </div>
                    
            </div>
        </>
        )
    }
}