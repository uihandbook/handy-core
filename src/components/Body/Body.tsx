/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS, WithMargin, WithPadding } from "handy-types";
import { rgba, setMargin, setPadding } from "handy-functions";
import { fontColor, fontFamily, fontSize, fontWeight, opacity } from "handy-tokens";

const bodyStyles = css`
  font-family: ${fontFamily.regular};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.light};
  margin: 0;
`;

const defaultStyles = css`
  color: ${fontColor.base};
`;

const lightStyles = css`
  color: ${rgba(fontColor.base, opacity._4)};
`;

export interface BodyProps
  extends WithClassName,
    WithCSS,
    WithMargin,
    WithPadding {
  color?: "default" | "light";
  text?: string;
}

const styleMap = {
  default: defaultStyles,
  light: lightStyles
};

export const Body: FC<BodyProps> = ({
  children,
  className,
  css,
  margin = "0px",
  padding = "0px",
  text,
  color = "default"
}) => (
  <p
    css={[
      bodyStyles,
      styleMap[color],
      setMargin(margin),
      setPadding(padding),
      css
    ]}
    className={`handy-body ${className}`}
  >
    {text || children}
  </p>
);

export default Body;
