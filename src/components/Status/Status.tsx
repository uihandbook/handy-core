/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS, WithStatus } from "handy-types";
import { colors, statusColors } from "handy-tokens";

export const statusSize = 10;

const statusIndicatorStyles = css`
  position: relative;
  display: inline-block;
  width: ${statusSize}px;
  height: ${statusSize}px;
  border-radius: ${statusSize / 2 + 2}px;
  border: 2px solid ${colors.light_100};
`;

export type StatusProps = WithClassName & WithCSS & WithStatus;

export const Status: FC<StatusProps> = ({
  className,
  css,
  status = "neutral"
}) => {
  return (
    <span
      className={`handy-status ${className}`}
      css={[
        statusIndicatorStyles,
        `background-color: ${statusColors[`${status}_900`]};`,
        css
      ]}
    ></span>
  );
};

export default Status;
