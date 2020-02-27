import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
} from "@material-ui/core";

import WeatherCardSubheader from "./WeatherCardSubheader";

export const WeatherCard = props => {
    return (
        <Card>
            <CardHeader
                title={props.currentWeather.city + ", " + props.currentWeather.country}
                subheader={<WeatherCardSubheader currentWeather={props.currentWeather}/>}
            />
            <CardContent>
                {Math.round(props.currentWeather.temperature)}&deg;C
            </CardContent>
        </Card>
    );
};
