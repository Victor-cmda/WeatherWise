import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureFull, faDroplet, faWind, faGaugeHigh, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [currCity, setCurrCity] = useState('São Paulo');
    const [units, setUnits] = useState('metric');
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeather();
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const search = e.target.querySelector('.weather__searchform');
        setCurrCity(search.value);
        search.value = '';
    };

    const handleUnitChange = (newUnits) => {
        if (units !== newUnits) {
            setUnits(newUnits);
            getWeather();
        }
    };

    const convertTimeStamp = (timestamp, timezone) => {
        const convertTimezone = timezone / 3600;
        const date = new Date(timestamp * 1000);
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: `Etc/GMT${convertTimezone >= 0 ? '-' : '+'}${Math.abs(convertTimezone)}`,
            hour12: true,
        };
        return date.toLocaleString('pt-BR', options);
    };

    const convertCountryCode = (country) => {
        const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
        return regionNames.of(country);
    };

    const getWeather = async () => {
        const API_KEY = '64f60853740a1ee3ba20d0fb595c97d5';
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`
            );
            setWeatherData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        getWeather();
    }, [currCity, units]);

    return (
        <div className="container">
            <div className="weather__header">
                <form className="weather__search" onSubmit={handleSearchSubmit}>
                    <input type="text" placeholder="Procure pela cidade..." className="weather__searchform" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </form>
                <div className="weather__units">
                    <span className="weather_unit_celsius" onClick={() => handleUnitChange('metric')}>
                        °C
                    </span>
                    <span className="weather_unit_farenheit" onClick={() => handleUnitChange('imperial')}>
                        °F
                    </span>
                </div>
            </div>
            {!loading && (
                <div className="weather__body">
                    <h1 className="weather__city">
                        {weatherData.name}, {convertCountryCode(weatherData.sys.country)}
                    </h1>
                    <div className="weather__datetime">
                        {convertTimeStamp(weatherData.dt, weatherData.timezone)}
                    </div>
                    <div className="weather__forecast">
                        <p>{weatherData.weather[0].main}</p>
                    </div>
                    <div className="weather__icon">
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                            alt="Weather Icon"
                        />
                    </div>
                    <p className="weather__temperature">{weatherData.main.temp.toFixed()}°</p>
                    <div className="weather__minmax">
                        <p>Min: {weatherData.main.temp_min.toFixed()}°</p>
                        <p>Max: {weatherData.main.temp_max.toFixed()}°</p>
                    </div>
                </div>
            )}
            {!loading && (
                <div className="weather__info">
                    <div className="weather__card">
                        <FontAwesomeIcon icon={faTemperatureFull} size="2x"/>
                        <div>
                            <p>Sensação Térmica</p>
                            <p className="weather__realfeel">{weatherData.main.feels_like.toFixed()}°</p>
                        </div>
                    </div>
                    <div className="weather__card">
                        <FontAwesomeIcon icon={faDroplet} size="2x"/>
                        <div>
                            <p>Umidade</p>
                            <p className="weather__humidity">{weatherData.main.humidity}%</p>
                        </div>
                    </div>
                    <div className="weather__card">
                        <FontAwesomeIcon icon={faWind} size="2x"/>
                        <div>
                            <p>Ventos</p>
                            <p className="weather__wind">{weatherData.wind.speed} {units === "imperial" ? "mph" : "m/s"}</p>
                        </div>
                    </div>
                    <div className="weather__card">
                        <FontAwesomeIcon icon={faGaugeHigh} size="2x"/>
                        <div>
                            <p>Pressão</p>
                            <p className="weather__pressure">{weatherData.main.pressure} hPa</p>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Weather;
