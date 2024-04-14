import ContainCard from "./components/ContainCard.jsx";
import Nav from "./components/Nav.jsx"
// import data from "./data.js";
import ViewIcon from "./components/ViewIcon.jsx";
import { useState } from "react";

function App() {
  const [cities, setCities] = useState([])

  const search = (nameCity) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&units=metric&lang=es&appid=e49c1a85c78b9a188a8e7e2a239f1469`)
    .then(r => r.json())
    .then((cityApi) => {
      if(cityApi.main !== undefined){ /* pregunta si existe la ciudad en la api */

        setCities([...cities, cityApi]);
      } else {
        alert("Ciudad no encontrada");
      }
    });

  };

  const onClose = (id) => {
    setCities(cities.filter((city) => city.id !== id))
  }
  
  return (
    <div>
      <ViewIcon />
      <Nav onSearch={search} />
      <ContainCard cities={cities} onClose={onClose} />
    </div>
  );
}

export default App;
