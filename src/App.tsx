/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import React from 'react';
import {fontFamily, fontSize, gray2} from './Styles';
import { WidgetsContainer } from "./WidgetsContainer";

const App: React.FC = () => {
    return (
        <div
            css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
        >
          <WidgetsContainer />
        </div>
    )
};

export default App;
