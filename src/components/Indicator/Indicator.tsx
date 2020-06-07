/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import {
  WithClassName,
  WithCSS,
  WithMargin,
  WithPadding,
  WithPosition,
  WithStatus
} from "handy-types";
import {
  setMargin,
  setPadding,
  setPosition
} from "handy-functions";
import { colors, statusColors } from "handy-tokens";

const indicatorSize = 10;

const indicatorWrapperStyles = css`
  position: relative;
  display: inline-block;
`;

const indicatorStyles = css`
  position: absolute;
  width: ${indicatorSize}px;
  height: ${indicatorSize}px;
  border-radius: ${indicatorSize + 1}px;
  border: 2px solid ${colors.light_100};
`;

export type IndicatorProps = WithClassName &
  WithCSS &
  WithMargin &
  WithPadding &
  WithPosition &
  WithStatus;

export const Indicator: FC<IndicatorProps> = ({
  position = { top: "0px", right: "0px" },
  children,
  className,
  css,
  margin = "0px",
  padding = "0px",
  status = "neutral"
}) => {
  return (
    <div
      css={[
        indicatorWrapperStyles,
        setMargin(margin),
        setPadding(padding),
        css
      ]}
      className={`handy-indicator ${className}`}
    >
      <span
        css={[
          indicatorStyles,
          setPosition(position),
          `background-color: ${statusColors[`${status}_900`]};`
        ]}
      ></span>
      {children}
    </div>
  );
};

export default Indicator;
