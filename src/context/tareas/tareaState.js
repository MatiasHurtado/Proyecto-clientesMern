import React,{useReducer} from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'
import uuid from 'uuid/dist/esm-browser/v4';

import {TAREAS_PROYECTOS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types/index'

const TareaState = props =>{
    const initialState ={
        tareas:[
            {id:1,nombre:'Elegir Plataforma', estado:true,proyectoId:1},
            {id:2,nombre:'Elegir Colores', estado:false,proyectoId:2},
            {id:3,nombre:'Elegir Plataforma', estado:true,proyectoId:1},
            {id:4,nombre:'Elegir Colores', estado:false,proyectoId:4},
            {id:5,nombre:'Elegir Plataforma de pago', estado:true,proyectoId:3},
            {id:6,nombre:'Elegir Plataforma', estado:true,proyectoId:4},
            {id:7,nombre:'Elegir Colores', estado:false,proyectoId:1},
            {id:8,nombre:'Elegir Plataforma de pago', estado:true,proyectoId:2},
            {id:9,nombre:'Elegir Plataforma de pago', estado:true,proyectoId:3},
            {id:10,nombre:'Elegir Hosting', estado:false,proyectoId:4},
            {id:11,nombre:'Elegir Plataforma', estado:true,proyectoId:4},
            {id:12,nombre:'Elegir Colores', estado:false,proyectoId:2},
            {id:13,nombre:'Elegir Plataforma de pago', estado:true,proyectoId:3},
        ],
        tareasproyecto:null,
        errortarea:false,
        tareaseleccionada:null
    }


    //crear dispatch y state

    const [state,dispatch] = useReducer(TareaReducer,initialState)
    
    //Crear las funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId  =>{
        dispatch({
            type:TAREAS_PROYECTOS,
            payload:proyectoId
        })
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea =>{
        tarea.id = uuid();
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
        })
    }

    //Valida y muestra un error en caso de que sea necesario
    const validarTarea = () =>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }
    //EliMINAR tarea por id

    const eliminarTarea = id =>{
        dispatch({
            type:ELIMINAR_TAREA,
            payload:id
        })
    }
    //Cambiar Estado De La Tarea
    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type:ESTADO_TAREA,
            payload:tarea
        })
    }
    //extraer una tarea para edicion
    const guardarTareaActual = tarea =>{
        dispatch ({
            type:TAREA_ACTUAL,
            payload:tarea
        })
    }
    //Edita o modifica una tarea 
    const actualizarTarea = tarea => {
        dispatch({
            type:ACTUALIZAR_TAREA,
            payload:tarea
        })
    }
    //Elimina la tareaseleccionada
    const limpiarTarea = () =>{
        dispatch ({
            type :LIMPIAR_TAREA,
        
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasproyecto:state.tareasproyecto,
                errortarea:state.errortarea,
                tareaseleccionada:state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState;