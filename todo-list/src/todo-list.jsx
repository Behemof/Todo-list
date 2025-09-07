import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";


function TodoList (){
    const [input, setInput]= useState ("")
    const [lista, setLista] = useState([])

    const eliminarTarea = (index) => {
    const nuevaLista = lista.filter((item, idx) => idx !== index); 
    setLista(nuevaLista); 
  };

    return(
        <div>
            <h1> Todo List</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe algo para tu lista" />

            <button onClick={()=> {
             if(input.trim() !== ""){
                setLista([...lista, input])
                setInput("")
             }   
            }}>
                Agregar Tarea
            </button>

            <ul>
                {lista.map((item, index) =>(<li key={index}>{item}   <FaTrash
              onClick={() => eliminarTarea(index)} // Llama a la función de eliminar pasando el índice
              style={{ cursor: "pointer", marginLeft: "10px", color: "silver" }}
            /> </li>)) }
               
            </ul>
        </div>
        
    )
}

export default TodoList;