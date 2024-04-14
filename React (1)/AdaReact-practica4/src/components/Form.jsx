import { useState } from "react"

export default function Form({ handleAddCharacter }) {

    const [newCharacter, setNewCharacter] = useState({
        name:"",
        title:"",
        family:"",
        img:"",
        id: crypto.randomUUID()
    })

    // Si lo dejamos asi, character va a ser igual a un string con la letra tipeada.

    // 1. Indicar tipo de dato adentro de la funcion. En este caso, objeto {}.
    // 2. Queremos copiar la info que ya esta en character, completa. De esa manera, si escribo el nombre no me borra todos los otros datos.
    // 3. Con una coma (solo separa pero sirve), le indico cual es la propiedad que quiero modificar del objeto y le digo que es lo que queremos que ingrese ahi. 

    return (
    <form onSubmit={(e) => e.preventDefault(e) }>
        <label htmlFor="">Nombre Completo</label>
        <input type="text" name="" id="" onChange={(e) => setNewCharacter({...newCharacter, name: e.target.value})} />
        
        <label htmlFor="">Titulo</label>
        <input type="text" name="" id="" onChange={(e) => setNewCharacter({...newCharacter, title: e.target.value})} />

        <label htmlFor="">Familia</label>
        <input type="text" name="" id="" onChange={(e) => setNewCharacter({...newCharacter, family: e.target.value})} />

        <label htmlFor="">Imagen</label>
        <input type="url" name="" id="" onChange={(e) => setNewCharacter({...newCharacter, img: e.target.value})} />

        <button type="submit" onClick={() => handleAddCharacter(newCharacter)}> Agregar + </button>
    </form>
    )
} 