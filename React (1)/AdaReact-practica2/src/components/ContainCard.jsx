import Card from "./Card"

export default function ContainCard({ cities, onClose }) {
  return <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap"}}>
    {
      cities ? cities.map(city => <Card 
        key={city.id}
        id={city.id}
        name={city.name}
        temp={city.main.temp}
        description={city.weather[0].description}
        feels_like={city.main.feels_like}
        humidity={city.main.humidity}
        clouds={city.clouds.all}
        img={city.weather[0].icon}
        onClose={onClose}
      />) : <h1>Agrega una ciudad</h1>
    }
  </div>;
}
