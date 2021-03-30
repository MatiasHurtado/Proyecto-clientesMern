import React,{useContext,useEffect} from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
const ListadoProyecto = () => {

       //Extraer Proyectos de  state inicial
       const proyectosContext = useContext(proyectoContext);
       const {proyectos,obtenerProyecto} = proyectosContext;


        //Obtener Proyectos cuando carga el componente
       useEffect(() => {
            obtenerProyecto()
        }, []);

        //Revisar si proyecto tiene contenido
       if(proyectos.length === 0) return <p>No hay Proyecto, Comienza creando Uno</p>
    
    
    return ( 
        <ul className="listado-proyectos"> 
          <TransitionGroup>
          {proyectos.map(proyecto =>(
                <CSSTransition
                 key={proyecto.id}
                 timeout={200}
                 classNames="proyecto"
                 >
                <Proyecto 
                       
                        proyecto={proyecto}
                    />
                </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyecto;