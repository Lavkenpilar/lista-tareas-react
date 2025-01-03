import { useState } from "react"
import { tareasIniciales } from "../TareasIniciales"

const Tarea = () => {
    //estado asociado a la información proveniente del input
    const [nombreTarea, setNombreTarea] = useState ("")
    /*const listaTareas = ["Tarea1", "Tarea2", "Tarea3"]*/
    //se modifica el array listaTareas, en la forma de un estado para que la lista se actualice de manera automática toda vez que se incorpore una nueva tarea
    const [listaTareas, setListaTareas] = useState (tareasIniciales)

    // Recordando el método map: creamos un nuevo arreglo llamado lista, que contendrá el resultado de la función del método map, en este caso convertir cada tarea a mayúscula
/*const lista = listaTareas.map((tarea)=>tarea.toUpperCase())
console.log (lista)
    return (
        <ul>
            
            {listaTareas.map(tarea => <li key={tarea}> {tarea}</li>)}
        </ul>
    )*/
    // para agregar una tarea nueva a la lista se necesita de 3 elementos: un input, un formulario y un botón submit. Para actualizar la lista se requiere que el arreglo sea un estado, de esta forma, solo con agregar un elemento nuevo la lista se actualizará. También se debe guardar en un estado el valor del input dado que sera el varlor que se guardará en el arreglo. Cada vez que se modifique el input, se actualizará el estado que guarda su información y cada vez que se envíe el formulario, se actualizara el estado que guarda el arreglo.

    //función al enviar el formulario
    const enviarFormulario = (e) => {
                e.preventDefault ()
       //console.log ('enviando formulario')
       
       setListaTareas ([...listaTareas, {nombre:nombreTarea, completada:false}])  // se agrega una nueva tarea con el método spread y la tarea corresponde a un dato introducido desde el input, el cual contendra un nombre y la propiedad completada, siguiendo la estructura del objeto TareasInciales
       setNombreTarea ("") // vaciar el formulario.
        }
//funcion al escribir sobre el input del formulario
const capturaInput = (e) => {
    setNombreTarea (e.target.value)
    }
return (
    <div>
        <form onSubmit = {enviarFormulario}>
            <input name="nombreTarea" onChange={capturaInput}/> 
            <button>Agregar tarea </button>
        </form>
        <ul>
            
            {listaTareas.map(tarea => (
                <li key={tarea.nombre} 
                onClick={()=>console.log(tarea)}
                style={tarea.completada===true ?{textDecoration:'line-through'} : {}}> {tarea.nombre}</li>))}
        </ul>

    </div>
)
}
export default Tarea
