import {TestWidget} from "./Widgets/TestWidget";
import {WeatherWidget} from "./Widgets/Weather/WeatherWidget";

import React from "react";

export enum WidgetType {
    none = 'none',
    test = 'test',
    weather = 'weather',
};

export const widgetFactory = (widgetType: string) => {
    let widget;

    switch (widgetType) {
        case 'weather' :
            widget = <WeatherWidget/>;
            break;
        case 'test' :
            widget = <TestWidget/>;
            break;
        default :
            widget = null;
            break;
    }

    return widget;
}
