/* eslint-disable react/no-direct-mutation-state */
import React from "react";

import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

import { Toast } from 'primereact/toast';

import { Dropdown } from 'primereact/dropdown';

import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

import Menu from "../../components/Menu/Menu";

import AssociateService from "../../services/AssociateService";

import './CreateAssociate.css'
export default class CreateAssociate extends React.Component{  

    state = {
        items:[{ label: 'Associados', url:"/associates" }, { label: 'Cadastrar'}],
        home: {icon: 'pi pi-home ', url: '/' },
        associates:[
            {
                id:'',
                nome:'',
                email:'',
                senha:'',
                telefone:'',
                linkWhatsapp:'',
                ativo:({stt:'ATIVO'},{stt:'NÃO ATIVO'}),
                tipo:({tipo:'TUTOR'},{tipo:'GESTOR'},{tipo:'ASSOCIADO'}),
                qrcode:''
            }
        ],
       
        toast:'',

        msgDeErro:'',
        error:'',
        errorEmail:''
    }

    constructor(){
        super();
        this.service = new AssociateService();
    }

    validar = () =>{
        let msgError= { severity: 'error', summary: 'Corrija os Erros a Baixo', detail: 'Campos não podem ser nulos' };
        let disparo = 0;
        if(this.state.nome === ''){
            disparo ++;
            let a = document.getElementById('nome'); 
            this.setState({error:'Esse Campo é Obrigatorio!'})
            a.classList.add('p-invalid')
        }
        if(this.state.email === ''){
            disparo ++;
            let a = document.getElementById('email') 
            a.classList.add('p-invalid')
        }
        if(this.state.linkWhatsapp === ''){
            disparo ++;
            let a = document.getElementById('linkWhatsapp') 
            a.classList.add('p-invalid')
        }
        if(disparo !== 0){
            this.state.toast.show(msgError);

        }else{
            this.confirm();
        }
    }

    confirm = () => {
        // eslint-disable-next-line no-unused-vars
        const a = document.getElementsByClassName('p-button p-component p-confirm-dialog-reject p-button-text')
        confirmDialog({
          
            message: 'Deseja realizar esse Cadastro ?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',

            accept:this.accept,
            reject:this.reject,
            
        });
       
    };

    save = async () =>{
        await this.service.create(
            {
               nome:this.state.nome,
               email:this.state.email,
               senha:this.state.senha,
               telefone: this.state.telefone,
               linkWhatsapp:this.state.linkWhatsapp,
               ativo:this.state.ativo.stt,
               tipo:this.state.tipo.tipo, 
               qrCode:this.state.qrCode    

       }).then ( (response) =>{
            this.state.toast.show({ severity: 'success', summary: 'Sucesso', detail: 'Cadastro realizado!' });
            this.delay(2000);
            window.location.href = `/associates`;
        }).catch(error =>{
            this.state.toast.show({ severity: 'error', summary: 'Erro', detail: 'Erro ao cadastrar!' });
            console.log(error.response)
        })
    }

    accept = () => {
        this.state.toast.show({ severity: 'info', summary: 'Confirmado', detail: 'Cadastro realizado com sucesso!', life: 3000 });
        this.save();
    };

    reject = () => {
        this.state.toast.show({ severity: 'warn', summary: 'Regeitado', detail: 'Cadastro Cancelado!', life: 3000 });
    };
    render(){
        return(
            <>
            <Menu/>
            <div className="container">
                <div className="header">
                    <Toast ref={(ex) => (this.state.toast = ex)} />
                    <div className="header">
                        <BreadCrumb model={this.state.items} home={this.state.home}></BreadCrumb>
                    </div>
                    <br/>
                    <label htmlFor="nome">Nome</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText id="nome" className="borderColorEdit" type="text"
                         value={this.state.nome}
                        onChange={(e) => { this.setState({nome: e.target.value }) }} />
                        {this.state.error && <span className="error">{this.state.error}</span>}
                    </div>
                </div>
                <br/>
                <label htmlFor="email">E-mail</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText className="borderColorEdit" type="text" 
                       onChange={(e) => { this.setState({email: e.target.value }) }}/>
                       {this.state.errorEmail && <span className="error">{this.state.errorEmail}</span>}
                   </div>
                </div>
                <br/>
                <label htmlFor="telefone">Telefone</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText type="text" 
                        onChange={(e) => { this.setState({telefone: e.target.value })}}/>
                         {this.state.error && <span className="error">{this.state.error}</span>}
                    </div>
                                 
                </div>
                <br/>
                <label htmlFor="password">Senha</label>
                <div className="input-texts">                    
                    <div className="input-dois">
                        <InputText type="password"onChange={(e) => { this.setState({password: e.target.value }) }}/>
                        {this.state.error && <span className="error">{this.state.error}</span>}
                    </div>
                     
                </div>
                <br/>
                <label htmlFor="linkWhatsapp">Link do Whatsapp</label>
                <div className="input-texts">
                    <div className="input-um">
                        <InputText  type="text"
                        onChange={(e) => { this.setState({linkWhatsapp: e.target.value }) }}/>
                        {this.state.error && <span className="error">{this.state.error}</span>}
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
                </div>
                <div className="bts">
                <div className="bt">
                    <ConfirmDialog 
                    acceptClassName="p-button-success"
                    rejectClassName="p-button-danger"
                    acceptLabel="Sim"
                    rejectLabel="Não"
                    />
                    <Button label="SALVAR" raised onClick={this.validar} />
                </div>
                <div className="bt">
                    <a href="/associates"><Button label="CANCELAR" ></Button></a>
                </div>
                </div>
                
            </div>
            </>
        )
    }
}