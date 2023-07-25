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

    async componentDidMount(){
        await this.service.get('')
            .then(response => {
                const associates = response.data;
                
                this.setState({associates})

                console.log(associates);
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