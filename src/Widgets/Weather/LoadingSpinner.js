/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CircularIndeterminate() {
  return (
    <div css={css`
      display: flex;
      justify-content: center;`}>
      <CircularProgress  css={css`
      margin: 10px;
      `}/>
    </div>
  );
}
