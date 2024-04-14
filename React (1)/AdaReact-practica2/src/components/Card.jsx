export default function Card({
  id, 
  name, 
  temp, 
  description, 
  feels_like, 
  humidity, 
  clouds, 
  img,
  onClose 
}) {
  return <div style={{
    border: "1px solid black",
    padding: "15px",
    borderRadius: "10px"
    }}>

      <h2>{name}</h2>
      <button onClick={() => onClose(id)}>X</button>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={description} />
      
      <p 
      style={{
        color: temp > 25 ? "red" : temp < 5  ? "blue" : "yellow"
        }}
      >

        Temperature: {temp}°C</p>
      <p>Description: {description}</p>
      <p>Feels like: {feels_like}°C</p>
      {/* ej adecuado para el usuario */}
      {humidity ? <p>Humidity: {humidity} </p> : ""} 
      {/* <p>Humidity: {humidity ? humidity : "no existe"}%</p> ej 1 de ternario */}
      <p>Clouds: {clouds}%</p>
  </div>;
}
