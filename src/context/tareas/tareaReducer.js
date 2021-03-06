import {
    TAREAS_PROYECTOS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
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
                tareas:[...state.tareas , action.payload],
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
        



        default:
            return state;
    }

}