
// Ejemplo de una funcion dentro del componente
// Ejemplo para colocar una img local y no local

import abcdf from "../assets/pc.jpg" // img local

export default function MiPrimerComponente() {
    function saludarConNombre(nombre) {
        return `Hola ${nombre}`;
    }

    return (
        <>
            <p>Saludar!!!</p>
            <p>{saludarConNombre("Cele")}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnplaxp7gh3BWZcUeNlsO56jKW79EA0FOow&usqp=CAU" alt="img no local"/>
            <img src={abcdf} alt="img local"/>
        </>
    );
}
