import React, { useState } from "react";
import axios from "axios";

export default function Axios() {
  const [data, setData] = useState([]);

  // POST CON AXIOS
  async function getData() {
    const persona = {
      nombre: "Cele",
      edad: "21",
    };
    try {
      await axios.post("URL", persona);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={getData}>BUSCAR DATOS</button>
    </div>
  );
}

/* 
// GET CON FETCH
  fetch("https://rickandmortyapi.com/api/character/3")
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      setData(datos);
    });

  try {
    const datos = await fetch("https://rickandmortyapi.com/api/character/3");
    const data = await datos.json()
    setData(data);
  } catch (error) {
    console.log(error);
  }

//GET CON AXIOS
  axios("https://rickandmortyapi.com/api/character/3")
      .then((datos) => {
        setData(datos.data);
      });

  try {
    const datos = await axios("https://rickandmortyapi.com/api/character/3");
    setData(datos.data);
  } catch (error) {
    console.log(error);
  }

  // POST CON FETCH
const persona = {
  nombre: "djsgdsa",
  edad: "dsuiaghdafs"
}
try {
  await fetch("dagdfsahdfas", {
    method: "POST",
    body: persona,
  })
} catch (error) {
  console.log(error);
}

//POST CON AXIOS
const persona = {
  nombre: "djsgdsa",
  edad: "dsuiaghdafs"
}
try {
  await axios.post("dsagdgafdsa", persona)
} catch (error) {
  console.log(error);
}
*/