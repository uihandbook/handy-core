/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import {
  WithBackground,
  WithClassName,
  WithCSS,
  WithPadding,
  WithMargin,
  WithShadow,
  WithStatus
} from "@uihandbook/handy-types";
import { rgba, setMargin, setPadding } from "@uihandbook/handy-functions";
import { borderRadius, colors, opacity, statusColors } from "@uihandbook/handy-tokens";

const cardStyles = css`
  display: inline-block;
  box-sizing: border-box;
`;

const roundedStyles = css`
  border-radius: ${borderRadius.largest};
`;

export interface CardProps
  extends WithBackground,
    WithClassName,
    WithCSS,
    WithPadding,
    WithMargin,
    WithShadow,
    WithStatus {
  rounded?: boolean;
}

export const Card: FC<CardProps> = ({
  background = colors.light_900,
  children,
  className,
  css,
  padding = "0px",
  margin = "0px",
  rounded = true,
  shadow,
  shadowColor = rgba(colors.dark_900, opacity._2),
  status
}) => {
  return (
    <div
      className={`handy-card ${className}`}
      css={[
        cardStyles,
        rounded ? roundedStyles : null,
        shadow ? `box-shadow: ${shadow} ${shadowColor};` : null,
        background ? `background-color: ${background};` : null,
        status ? `background-color: ${statusColors[`${status}_500`]};` : null,
        setMargin(margin),
        setPadding(padding),
        css
      ]}
    >
      {children}
    </div>
  );
};

export default Card;
