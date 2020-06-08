/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { Status, StatusProps } from "../Status/Status";
import {
  WithClassName,
  WithCSS,
  WithMargin,
  WithPadding,
  WithPosition,
  WithStatus
} from "@uihandbook/handy-types";
import { setMargin, setPadding, setPosition } from "@uihandbook/handy-functions";

const statusIndicatorWrapperStyles = css`
  position: relative;
  display: inline-block;
`;

const statusStyles = css`
  position: absolute;
`;

export type StatusIndicatorProps = StatusProps &
  WithClassName &
  WithCSS &
  WithMargin &
  WithPadding &
  WithPosition &
  WithStatus;

export const StatusIndicator: FC<StatusIndicatorProps> = ({
  children,
  className,
  css,
  margin = "0px",
  padding = "0px",
  position = { top: "0px", right: "0px" },
  ...props
}) => {
  return (
    <div
      css={[
        statusIndicatorWrapperStyles,
        setMargin(margin),
        setPadding(padding),
        css
      ]}
      className={`handy-status-indicator ${className}`}
    >
      <Status {...props} css={[statusStyles, setPosition(position)]} />
      {children}
    </div>
  );
};

export default StatusIndicator;
