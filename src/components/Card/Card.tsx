/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import {
  WithClassName,
  WithCSS,
  WithPadding,
  WithMargin,
  WithShadow
} from "handy-types";
import { rgba, setMargin, setPadding } from "handy-functions";
import { borderRadius, colors, opacity } from "handy-tokens";

const cardStyles = css`
  display: inline-block;
  box-sizing: border-box;
  background: ${colors.light_900};
`;

const roundedStyles = css`
  border-radius: ${borderRadius.largest};
`;

export interface CardProps
  extends WithClassName,
    WithCSS,
    WithPadding,
    WithMargin,
    WithShadow {
  rounded?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  css,
  padding = "0px",
  margin = "0px",
  rounded = true,
  shadow,
  shadowColor = rgba(colors.dark_900, opacity._2)
}) => {
  return (
    <div
      className={`handy-card ${className}`}
      css={[
        cardStyles,
        rounded ? roundedStyles : null,
        shadow ? `box-shadow: ${shadow} ${shadowColor};` : null,
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
