import React from 'react';
import Proyecto from './Proyecto'
const ListadoProyecto = () => {

    const proyectos = [
        {nombre:'Tienda Virtual'},
        {nombre:'Intranet'},
        {nombre:'Diagrama Sitio Web'}
    ]
    return ( 
        <ul className="listado-proyectos"> 
            {proyectos.map(proyecto =>(
                    <Proyecto 
                        proyecto={proyecto}
                    />
            ))}
        </ul>
     );
}
 
export default ListadoProyecto;