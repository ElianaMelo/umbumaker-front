import React from "react";
//import CardDeColaboradores from '../../components/CardDeColaboradores/CardDeColaboradores';
import './ListAssociate.css';

import CardAssociate from "../../components/CardListAssociate/CardListAssociates";

import { BreadCrumb } from 'primereact/breadcrumb';

import AssociateService from "../../services/AssociateService";

import Menu from "../../components/Menu/Menu"

export default class ListAssociate extends React.Component{
    state = {
        items:[{ label: 'Associados', url:"/associates" }],

        home: {icon: 'pi pi-home ', url: '/' },
            associate3:[
            {
                id:'',
                nome:'',
                email:'',
                telefone:'',
                linkWhatsapp:'',
                tipo:'',
                status:'',
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

    findAll = () => {
        
        this.service.get('/all')
            .then(response => {
                const colaboradores2 = response.data;
                
                this.setState({colaboradores2})

                console.log(this.state.associate3);
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
                    <div>
                        <BreadCrumb model={this.state.items} home={this.state.home} />
                    </div>
                </div>

                <div className="associates">
                    <CardAssociate 
                        associates ={this.state.associate3}
                        delete = {this.delete}
                        editar = {this.update}
                    />
                    
                </div>
            </div>
            </>
        )
    }

}