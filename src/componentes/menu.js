import React, { useRef } from 'react';
import { AppRouter } from '../main/AppRoutes';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function GroupDemo() {
    const toast = useRef(null);
    const router = AppRouter();
    const items = [
        {
            label: 'Links',
            items: [
                {
                    label: 'DASHBOARDS',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },{
                    label: 'INSUMOS',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },{
                    label: 'ZONAS',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },{
                    label: 'DISPOSITIVOS',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },{
                    label: 'ASSOIADOS',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        router.push('/fileupload');
                    }
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}