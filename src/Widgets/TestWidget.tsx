/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {FC} from "react";
import {silver} from "../Styles";

export const TestWidget: FC = () => {
    return (
        <div css={css`
        width: 100%;
        border-radius: 3px;
        height: 150px;
        background: ${silver};
        display: flex;
        justify-content: center;`
        }></div>
    )
}
