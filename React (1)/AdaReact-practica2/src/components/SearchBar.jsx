import { useState } from "react";

export default function SearchBar({ busqueda }) {

const [nameCity, setNameCity] = useState("");

const handleInput = (e) => {
  console.log(e.target.value);
  setNameCity(e.target.value)
}

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        busqueda(nameCity);
      }}
    >
      <input type="text" placeholder="Ciudad..." onChange={handleInput} />
      <input type="submit" value="Agregar" />
    </form>
  );
}