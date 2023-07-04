import React from 'react';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

class TelaCadastro extends React.Component {
    state = {
        email:"",
        senha:"",
        nome:"",
        telefone:"",
        qrcode:"",
        ativo:"",
        linkWhatsapp:"",
        result: ''
      }
    
      create = async () => {
        await axios.post(`http://localhost:8080/contasacesso`,
          {
            email: this.state.email,
            senha: this.state.senha,
            nome: this.state.nome,
            telefone: this.state.telefone,
            qrcode: this.state.qrcode,
            ativo: this.state.ativo,
            linkWhatsapp: this.state.linkWhatsapp,
          }
        ).then(response => {
          console.log(response);
        }
        ).catch(error => {
          console.log(error.response);
        }
        );
      }
    
      show = () => {
        var result = this.state.nomeBordado;
        console.log(this.state.nomeBordado)
        this.setState({ result });
      }
     render() {
        return (

        )
    }
}

export default withRouter(TelaCadastro);