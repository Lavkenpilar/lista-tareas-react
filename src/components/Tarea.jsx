const Tarea = () => {
    const listaTareas = ["Tarea1", "Tarea2", "Tarea3"]

    // Recordando el método map: creamos un nuevo arreglo llamado lista, que contendrá el resultado de la función del método map, en este caso convertir cada tarea a mayúscula
const lista = listaTareas.map((tarea)=>tarea.toUpperCase())
console.log (lista)
    return (
        <ul>
            
            {listaTareas.map(tarea => <li key={tarea}> {tarea}</li>)}
        </ul>
    )
}
export default Tarea
