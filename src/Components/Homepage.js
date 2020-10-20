import React, { useState } from 'react'
import styles from './homepage.module.css'
// 52d02d521e6218b0ce822f2a7fc5ce8c

  
  const key = "52d02d521e6218b0ce822f2a7fc5ce8c"
  const url = "https://api.openweathermap.org/data/2.5/"

// function Homepage() {
    const Homepage = props => {
      const [ location, setLocation ] = useState("")
      const [ weather, setWeather ] = useState({})

      const handleSearch = (event) => {
        event.preventDefault()
        fetch(`${url}weather?q=${location}&units=metric&APPID=${key}`)
          .then((result) => result.json())
          .then((doc) => {
            setLocation("")
            setWeather(doc)
            console.log(doc)
          })
      }

    return (
    <div className="container h-100">
      <div className={styles.overlay}>
        <div className={styles.formWrap}>
          <form onSubmit={props.loadweather}>
            <div>{props.error ? error() : ""}</div>
            <div className="row">
              <div className="col-md-3 offset-md-2">
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="form-control"
                  placeholder="City"
                  name="city"
                />
              </div>
              <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
                <button
                  className="btn btn-warning"
                  onClick={event => handleSearch(event)}
                >
                  Get Weather
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.details}>
          {typeof weather.main != "undefined" ? (
          <div className={styles.temp}>
            <div className="cont2">
              <h5><span>{weather.name}, {weather.sys.country} </span></h5>
            </div>
            <div className="conts">
              <div className="cont">
                <h5> temperature <br/> <span>{weather.main.temp}°C</span> </h5>
              </div>
              <div className="cont1">
             <h5> weather <br/> <span>{weather.weather[0].main}</span></h5>
              </div>
            </div>
          </div>
        ) : null }
        </div>
      </div>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City ...!
    </div>
  );
};

export default Homepage
