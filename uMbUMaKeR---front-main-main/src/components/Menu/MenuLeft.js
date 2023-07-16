import React from 'react';

import "./Menu.css";
import { Button } from 'primereact/button';
import MenuItem from './MenuItem';
import { Menu } from 'primereact/menu';

//falta fazer a logica do botão ficar 
//branco e selecionado quando a pagina estiver aberta
//ver como vai ser a logica da transição de paginas

export default function MenuLeft (){

       let items = [
            {
                items: [
                    {
                        label: 'DASHBOARDS',
                        command: () => {
                            window.location.hash = '/fileupload';
                        }
                    },
                    {
                        label: 'INSUMOS',
                        url: 'https://primetek.com.tr'
                    },
                    {
                        label: 'ZONAS',
                        command: () => {
                            window.location.hash = '/fileupload';
                        }
                    },
                    {
                        label: 'DISPOSITIVOS',
                        command: () => {
                            window.location.hash = '/fileupload';
                        }
                    },
                    {
                        label: 'ASSOCIADOS',
                        command: () => {
                            window.location.href = '/associates';
                        }
                    },
                    { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' }
                ]
            }
        ];

    
    return (
        <div className="menu">
           <div className="logo">
                <a href='/'>
                    <img src="logo.png" alt="Logo-UmBuMaKeR" />
                </a>
           </div>
           <Menu model={items} orientation="vertical" breakpoint="767px" />
           {/*<div className="butoes">
                <Button id='bt' label="DASHBOARDS" severity="secondary" text />
                <Button id='bt' label="INSUMOS" severity="secondary" text />
                <Button id='bt' label="ZONAS" severity="secondary" text />
                <Button id='bt' label="DISPOSITIVOS" severity="secondary" text />
                <MenuItem href='/associates' label='ASSOCIADOS'></MenuItem>
                <MenuItem href='/associates' label='ASSOCIADOS'></MenuItem>
    </div>*/}
        </div>
    )
}
