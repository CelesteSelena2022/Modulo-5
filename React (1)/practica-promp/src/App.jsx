import './App.css'
import ContainCard from './components/ContainCard';

function App() {
  const personas = [
    {
      nombre: "Guillermo",
      apellido: "Montaña",
      edad: 31,
      ciudad: "San Juan",
      profesiones: [
        {
          nombre: "Profesor",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Tandem",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    }
  ];

  return (
    <>
      {personas.map((persona, i) => (
        <ContainCard
          key={i}
          nombre={persona.nombre}
          apellido={persona.apellido}
          edad={persona.edad}
          ciudad={persona.ciudad}
          profesiones={persona.profesiones}
        />
      ))} 
        <ContainCard 
        nombre="Ejemplo"
        edad={30}
        vive={true}
        profesiones={
          [{
            nombre: "profesor",
            lugar: "ada"
          }, {
            nombre: "programador",
            lugar: "qsy"
          }]
        }
        // ContainCard de ejemplo para edad, etc
        />
    </>
  );
}

export default App