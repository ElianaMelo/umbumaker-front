import React from 'react';
import axios from 'axios';

class TelaListar extends React.Component {
    state = {
        id:"",
        email:"",
        senha:"",
        nome:"",
        telefone:"",
        qrcode:"",
        ativo:"",
        linkWhatsapp:"",
        contasacesso:[]
    }

    find = () => {
        var params = '?';

        if (this.state.id !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }
            params = `${params}id=${this.state.id}`;
        }

        if (this.state.email !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }
            params = `${params}email=${this.state.email}`;

        }

        axios.get(`http://localhost:8080/contasacesso/${params}`)
            .then(response => {
                let contasacesso = response.data;
                this.setState({ contasacesso });
                console.log(contasacesso);
            }).catch(error => {
                console.log(error.response);
            });
    }

    delete = (id) => {
        axios.delete(`http://localhost:8080/contasacesso/${this.state.id}`
        ).then(response => {
            this.find();
        }
        ).catch(error => {
            console.log(error.response);
        }
        )
    }

    edit = () => {
        this.props.history.push('/TelaEditar');
    }

    render() {
        return (

        )
    }
}

export default withRouter(TelaListar);