/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import React, {useState} from 'react';
import {WidgetSlot} from "./WidgetSlot";
import {WidgetType} from "./WidgetFactory";

const widgetSlots = 3;

export const WidgetsContainer: React.FC = () => {
    const [widgets, setWidgets] = useState<WidgetType[]>(Array(widgetSlots).fill(WidgetType.none));

    const updateWidgets = (slotNumber: number, widgetType: WidgetType) => {
        let updatedWidgets = widgets.slice();
        updatedWidgets[slotNumber] = widgetType;
        setWidgets(updatedWidgets);
    };

    const addWidget = (slotNumber: number, widgetType: WidgetType) =>
        updateWidgets(slotNumber, widgetType);

    const deleteWidget = (slotNumber: number) =>
        updateWidgets(slotNumber, WidgetType.none);

    const moveWidget = (from: number, to: number) => {
        let updatedWidgets = widgets.slice();
        let widgetType = updatedWidgets[to];

        updatedWidgets[to] = updatedWidgets[from];
        updatedWidgets[from] = widgetType;

        setWidgets(updatedWidgets);
    }

    const moveRight = (slotNumber: number) => {
        let to = slotNumber + 1;
        if (to < widgetSlots) {
            moveWidget(slotNumber, to);
        } else {
            moveWidget(slotNumber, 0);
        }
    }

    const moveLeft = (slotNumber: number) => {
        let to = slotNumber - 1;
        if (to >= 0) {
            moveWidget(slotNumber, to);
        } else {
            moveWidget(slotNumber, widgetSlots - 1);
        }
    }

    return (
        <div
            css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 10px 50px;
        `}>
            {
                widgets.map(
                    (widgetType, i) =>
                        <WidgetSlot
                            slotNumber={i}
                            type={widgetType}
                            addWidget={addWidget}
                            deleteWidget={deleteWidget}
                            moveLeft={moveLeft}
                            moveRight={moveRight}
                        />)}
        </div>)
}
