import React, { useReducer } from 'react';
import uuid from 'uuid/dist/esm-browser/v4'
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO} from '../../types';
import Proyecto from '../../components/proyectos/Proyecto';




const ProyectoState = props =>{
    
    const proyectos = [
        {id:1,nombre:'Tienda Virtual'},
        {id:2,nombre:'Intranet'},
        {id:3,nombre:'Diagrama Sitio Web'},
        {id:4,nombre:'MERN'}
    ]
    const initialState ={
         proyectos : [],
        formulario:false,
        errorformulario:false,
        proyecto:null
    }
    //Dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(proyectoReducer,
        initialState)

    //Serie de funciones para el CRUB

    const mostrarFormulario = () =>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }

    //Obtener los Proyectos
    const obtenerProyecto = () =>{
        dispatch({
            type:OBTENER_PROYECTOS,
            payload:proyectos
        })
    }
    //Agregar Nuevo Proyecto
    const  agregarProyecto = proyecto =>{
        proyecto.id =uuid();

        //Insertar el proyecto en el state
        dispatch({
            type:AGREGAR_PROYECTOS,
            payload:proyecto
        })
    }

    //Valida Formulario por errores
    const mostrarError = ()=>{
        dispatch ({
            type:VALIDAR_FORMULARIO,
        })

    }

    //Selecciona el Proyecto que el usuario dio click
    const proyectoActual = proyectoId =>{
        dispatch({
            type:PROYECTO_ACTUAL,
            payload:proyectoId    
        })
    }

    //Eliminar un proyecto
    const eliminarProyecto = proyectoId =>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload:proyectoId
        })
    }
     return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario:state.errorformulario,
                proyecto:state.proyecto,
                mostrarFormulario,
                obtenerProyecto,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState