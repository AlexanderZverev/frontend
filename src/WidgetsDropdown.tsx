import React, {FC} from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import {WidgetType} from "./WidgetFactory";

const widgetsOption = Object.keys(WidgetType).slice(1).map(type => ({
    key: type, text: type, value: type
}));

interface Props {
    addWidget: (slotNumber: number, widgetType: WidgetType) => void;
    slotNumber: number;
}

export const WidgetsDropdown: FC<Props> = ({slotNumber, addWidget}) => {
    const widgetSelected = (event: any, {value}: any) => addWidget(slotNumber, value as WidgetType);
    return (
        <Menu compact>
            <Dropdown text='Select a widget' options={widgetsOption} simple item onChange={widgetSelected}/>
        </Menu>
    )
};
