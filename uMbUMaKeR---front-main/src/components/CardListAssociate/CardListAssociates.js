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
                <Card>
                    <div className="left">
                    <p className="tipo">
                            {associate.tipo}
                        </p>
                        <label className="lb">Nome</label>
                        <p >
                            {associate.nome}
                        </p>
                        <label className="lb">Email</label>
                        <p>
                            {associate.email}
                        </p>
                        <label className="lb">Telefone</label>
                        <p>
                            {associate.telefone}
                        </p>
                        <label className="lb">Link Whatsapp</label>
                        <p >
                            {associate.linkWhatsapp}
                        </p>
                        <p>QrCode</p>
                    </div>

                    <div className="card-butons">
                     <div className="bt">
                        <a href="/createAssociate">
                            <Button className="bt" severity="warning" raised><FontAwesomeIcon icon={faPlus} style={{color: "#0b6429",}} /></Button>
                        </a>
                    </div>

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