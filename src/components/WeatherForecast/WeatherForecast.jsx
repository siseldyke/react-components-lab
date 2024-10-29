import './WeatherForecast.css'

const WeatherForecast =(props) =>{
    const {weatherForecast} = props
    return(
<div className="weather">
  <h2>{weatherForecast.day}</h2>
  <img src="" alt="" />
  <p><span>conditions: </span>{weatherForecast.conditions}  </p>
  <p><span>time: </span>{weatherForecast.time}</p>
</div>
    )
}
export default WeatherForecast