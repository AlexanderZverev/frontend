/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import React, {FC, useEffect, useState} from "react";
import {Container} from "@material-ui/core";
import LoadingSpinner from "./LoadingSpinner";
import WeatherSearch from "./WeatherSearch";
import {WeatherCard} from "./WeatherCard";

interface Weather {
    city: string,
    country: string,
    date: number,
    icon_id: number,
    temperature: number,
    description: string,
}

export const WeatherWidget: FC = () => {
    const [city, setCity] = useState("Izhevsk");
    const [error, setError] = useState(null);
    const [currentWeather, setCurrentWeather] = useState<any>({});

    useEffect(() => {
        getWeather(city)
            .then(weather => {
                setCurrentWeather(weather);
                setError(null);
            })
            .catch(err => {
                console.error(`Error fetching current weather for ${city}: `, error);
                setError(err.message);
            });
    }, [city, error]);

    if (
        (currentWeather && Object.keys(currentWeather).length)) {
        return (
            <Container css={css`
            maxWidth: sm;`
            }>
                <div>
                    <WeatherCard currentWeather={currentWeather}/>
                    <WeatherSearch city={city} setCity={setCity} error={error}/>
                </div>
            </Container>
        );
    } else {
        return <LoadingSpinner/>;
    }
}

function handleResponse(response: any) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Error: Location " + response.statusText);
    }
}

function getWeather(city: string) {
    console.log(`${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
    return fetch(
        `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
        .then(res => handleResponse(res))
        .then(weather => {
            if (Object.entries(weather).length) {
                const mappedData = mapDataToWeatherInterface(weather);
                return mappedData;
            }
        });
}

function mapDataToWeatherInterface(data: any): Weather {
    const mapped = {
        city: data.name,
        country: data.sys.country,
        date: data.dt * 1000,
        icon_id: data.weather[0].id,
        temperature: data.main.temp,
        description: data.weather[0].description,
    };

    return mapped;
}
