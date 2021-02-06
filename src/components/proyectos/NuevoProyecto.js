import React,{Fragment,useContext,useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario,mostrarFormulario} = proyectosContext;

    //State para Proyecto
    const[proyecto, guardarProyecto] = useState({
        nombre:''
    });


    //EXTRAER NOMBRE DE PROYECTO
    const {nombre}= proyecto;

    //Lee Los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }
    //CUANDO EL USUARIO ENVIA UN PROYECTO
    const onSubmitProyecto = e =>{
        e.preventDefault();
        //Validar el proyecto

        //Agregar Al State

        //Reiniciar El form
    }
    //Mostrar Formulario
    const onClinkFormulario = () =>{
        mostrarFormulario()
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClinkFormulario}
            >Nuevo Proyecto</button>
            {   
                formulario?(

                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}

                    >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="agregar Proyecto"
                    />

                    </form>
                ):null
            }

            
        </Fragment>
        
     );
}
 
export default NuevoProyecto;