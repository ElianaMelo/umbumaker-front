/* eslint-disable no-undef */
import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './CardListAssociates.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faPenToSquare} from '@fortawesome/free-solid-svg-icons'; 

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const rows = props.associates.map(associate =>{
        if(associate.id === ''){
            <Card>
                <div id="status" className="center">
                        <p>
                            SEM INFORMAÇÃO
                        </p>
                    </div>
            </Card>
        }
        return(
            
            <div className="card">  

                <div className="divCreat">
                    <a href="/createAssociate">
                         <Button className="btCreat" severity="warning" raised><FontAwesomeIcon icon={faPlus} style={{color: "#0b6429",}} /></Button>
                    </a>
                </div>  

                <Card>
                    <div className="left">
                        <div className='divTipo'>
                        <label className="lb">Tipo</label>
                            <p className="tipo">
                                {associate.tipo}
                            </p>
                        </div>
                        <div className='divNome'>
                            <label className="lb">Nome</label>
                                 <p > {associate.nome}</p>
                        </div>
                        <div className='divEmail'>
                            <label className="lb">Email</label>
                                <p>{associate.email}</p>
                        </div>
                        <div className='divTelefone'>
                            <label className="lb">Telefone</label>
                                <p>{associate.telefone}</p>
                        </div>
                        <div className='divLinkWhatsapp'>
                            <label className="lb">Link Whatsapp</label>
                            <p >{associate.linkWhatsapp}</p>
                        </div>
                        <div className='divQrCode'>
                            <label className="lb">QrCode</label>
                            <br/>
                            <p>QrCode</p>
                        </div>
                    </div>

                    <div className="card-butons">

                        <Button className="bt" onClick={e => props.editar(associate.id)}
                        title="Editar" severity="warning" aria-label="Editar">
                           <FontAwesomeIcon icon={faPenToSquare} style={{color: "#0b6429",}} />
                        </Button>

                        <Button className="bt" onClick={e => props.delete(associate.id)} style={{color: "#0b6429",}} title="Deletar" severity="warning" aria-label="Deletar">
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      
                    </div>
                </Card>
            </div>
        )
    })

    return(
        <div>
            {rows}
        </div>
    )
}