import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
const ListadoProyecto = () => {

       //Extraer Proyectos de  state inicial
       const proyectosContext = useContext(proyectoContext);
       const {proyectos,obtenerProyecto} = proyectosContext;


        //Obtener Proyectos cuando carga el componente
       useEffect(() => {
            obtenerProyecto()
        }, []);

        //Revisar si proyecto tiene contenido
       if(proyectos.length === 0) return null
    
    
    return ( 
        <ul className="listado-proyectos"> 
            {proyectos.map(proyecto =>(
                    <Proyecto 
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
            ))}
        </ul>
     );
}
 
export default ListadoProyecto;