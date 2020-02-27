/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import React from 'react';
import {widgetFactory, WidgetType} from "./WidgetFactory";
import {WidgetsDropdown} from "./WidgetsDropdown";
import {Button} from "semantic-ui-react";

interface Props {
    type: WidgetType,
    slotNumber: number,
    addWidget: (slotNumber: number, widgetType: WidgetType) => void,
    deleteWidget: (slotNumber: number) => void,
    moveLeft: (slotNumber: number) => void,
    moveRight: (slotNumber: number) => void,
}

export const WidgetSlot: React.FC<Props> = (
    {
        type,
        slotNumber,
        addWidget,
        deleteWidget,
        moveLeft,
        moveRight
    }) => {

    const widget = widgetFactory(type);
    return (
        <div css={css`
                    margin: 20px 20px;
                    width: 200px;
                    height: 300px;`}> {
            widget && (
                <div>
                    <div css={css`
                    display: flex;
                    justify-content: center;`
                    }>
                        <Button icon='left chevron' onClick={() => moveLeft(slotNumber)}/>
                        <Button icon='right chevron' onClick={() => moveRight(slotNumber)}/>
                        <Button negative icon='close' onClick={() => deleteWidget(slotNumber)}/>
                    </div>
                    {widget}
                </div>) ||
            <WidgetsDropdown slotNumber={slotNumber} addWidget={addWidget}/>
        }
        </div>)
};
