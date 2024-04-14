export default function ContainCard({
    nombre,
    apellido,
    edad,
    ciudad,
    profesiones,
    }) {
    return (
    <div>
        <h1>{nombre}</h1>
        <h1>{apellido}</h1>
        <h1>{edad}</h1>
        <h1>{ciudad}</h1>

        <div>{profesiones[1].nombre}</div>
    </div>
    );
    }