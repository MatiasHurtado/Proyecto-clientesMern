import React,{useContext,useState,useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

 const FormTareas = () => {

     //Extraer si un proyecto esta activo
     const proyectosContext = useContext(proyectoContext);
     const {proyecto} = proyectosContext;

     
    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {tareaseleccionada,errortarea,agregarTarea,validarTarea,obtenerTareas,actualizarTarea,limpiarTarea}=tareasContext;



     //Effect que detecta si hay una tarea seleccionada
     useEffect(() => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
     },[tareaseleccionada]);

     //state de formulario
     const [tarea,guardarTarea] =useState ({
         nombre:''
     })
     //extraer el nombre del proyecto
     const {nombre} = tarea;

        //Si no hay proyecto seleccionado
        if(!proyecto) return null

        //Array destructuring para extraer el proyecto actual
        const [proyectoActual] = proyecto

        //Leer los Valores del formulario
        const handleChange = e =>{
            guardarTarea({
                ...tarea,
                [e.target.name]:e.target.value
            })
        }

        const onSubmit = e =>{
            e.preventDefault();
            //Validar
            if(nombre.trim() === ''){
                validarTarea()
                return;
            }

            //si es edicion o si es nueva tarea
            if( tareaseleccionada === null ){
        
                //Agregar la nueva tarea al state de tareas
                tarea.proyectoId = proyectoActual.id;
                tarea.estado = false;
                agregarTarea(tarea);
            }else{
                //actualizar tarea existente
                actualizarTarea(tarea);
                //Eliminar tarea Seleccionada del state
                limpiarTarea() 
            }
            //Pasar la validacion

 

            //Obtener y filtrar las tareas dek proyecto actual
            obtenerTareas(proyectoActual.id)

            //Reiniciar el formedc 
            guardarTarea({
                nombre:''
            })
        }
     return ( 
         <div className="formulario">
             <form
                onSubmit={onSubmit}
             >
                 <div className ="contendor-input">
                     <input
                        type="text"
                         className="input-text"
                         placeholder="Nombre Tarea"
                         name="nombre"
                         value={nombre}
                         onChange={handleChange}
                     />
  
                 </div>
                 <div className="contenedor-input">
                     <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                     />
                 </div>
             </form>
             {errortarea ?<p className="mensaje error">El nombre Es Obligatorio</p> :null}
         </div>
      );
 }
  
 export default FormTareas;