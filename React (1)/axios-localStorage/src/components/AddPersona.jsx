import { useState } from "react";

export default function AddPersona() {

    const [personas, setPersonas] = useState( /* aca se agregan todas las personas */
    JSON.parse(localStorage.getItem("personas")) || [] //   --- guiño
    );
    const [nombre, setNombre] = useState(""); /* input nombre */
    const [edad, setEdad] = useState(0); /* input edad */

    function AgregarARo() {
    const newPersonas = [
        ...personas,
        { id: crypto.randomUUID(), nombre, edad: edad }, /* cuando se hace click se agrega esa nueva persona */
    ]; /* cuando estamos seteando la edad no es necesario escribirlo dos veces, podemos colocarlo solo una vez como nombre*/
    setPersonas(newPersonas);
    localStorage.setItem("personas", JSON.stringify(newPersonas));
    }

  /* personas.map((elem) => elem.nombre) */ // console.log("HOLA"); /* NOOOOOOOOOOOOOOOOOO */

    /* if (personas.length > 2) {
    return <h1>HAY MAS DE 2 PERSONAS</h1>;
    // NOOOOO, se considera codigo suelto o sin encapsular, UN SOLO RETURN DEL COMPONENTE} */

    return (
    <div>
        {personas.length > 2 ? (
        <h1>HAY MAS DE 2 PERSONAS</h1>
        ) : (
        personas.map((persona) => <h1 key={persona.id}>{persona.nombre}</h1>)
        )}
        <input
        type="text"
        placeholder="Ingrese nombre"
        onChange={(e) => setNombre(e.target.value)}
        ></input>
        <input
        type="number"
        placeholder="Ingrese edad"
        onChange={(e) => setEdad(e.target.value)}
        ></input>
        <button onClick={AgregarARo}>AGREGAR PERSONA!</button>
    </div>
    );
}
