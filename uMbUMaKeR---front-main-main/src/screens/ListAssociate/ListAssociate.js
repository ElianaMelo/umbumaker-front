import React from "react";
import './ListAssociate.css';

import CardAssociate from "../../components/CardListAssociate/CardListAssociates";
import AssociateGallery from "../../components/Gallery/AssociateGallery";

import { BreadCrumb } from 'primereact/breadcrumb';

import AssociateService from "../../services/AssociateService";

import Menu from "../../components/Menu/Menu"

export default class ListAssociate extends React.Component{
    state = {
        items:[{label: 'Associados', url:"/associates" }],
        home: {icon: 'pi pi-home ', url: '/' },
        associates:[
            {
                id:'',
                nome:'',
                email:'',
                senha:'',
                telefone:'',
                linkWhatsapp:'',
                ativo:'',
                tipo:'',
                qrcode:''
            }
        ]
    }

    constructor(){
        super();
        this.service = new AssociateService();
    } 

    componentDidMount(){
        this.findAll();
        console.log(this.findAll());
    }

    findAll = async () => {
        
        await this.service.get('')
            .then(response => {
                const associates2 = response.data;
                
                this.setState(associates2)

                console.log(associates2);
                console.log(this.state.associates);
            }
            ).catch(error => {
                console.log(error.response);
            }
            );
    }


    delete = (associateId) =>{
        this.service.delete(associateId)
            .then(response =>{
               alert("excluido")
               window.location.reload();
            }).catch(error =>{
                console.log(
                    alert("Erro ao Excluir")
                )
            })
    }

    update = (associateId) => {
        window.location.href = `/updateAssociate/${associateId}`;    
        
    }

    listar = (associates) =>{
        for ( let cont in associates) {
            return cont;
        }
    }

    render(){
        return(
            <>
           <Menu/>
            <div className="container">
                <div className="header">
                    <div >
                        <BreadCrumb model={this.state.items} home={this.state.home} className = "breadCrumb" />
                    </div>
                </div>

                <div className="associates">
                    <AssociateGallery/>
                    <CardAssociate 
                        associates ={this.state.associates}
                        delete = {this.delete}
                        editar = {this.update}
                
                    />
                    
                </div>
            </div>
            </>
        )
    }

}