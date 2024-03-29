import {
    TAREAS_PROYECTOS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types/index'



export default (state,action) =>{
    switch(action.type){
        case TAREAS_PROYECTOS:
            return{
                ...state,
                tareasproyecto:state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas:[action.payload, ...state.tareas ],
                errortarea:false

            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea:true
            }
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA:
            return{
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea )

            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaseleccionada: action.payload
            }
        case LIMPIAR_TAREA:
            return{
                ...state,
                tareaseleccionada: null
            }
      
        default:
            return state;
    }

}