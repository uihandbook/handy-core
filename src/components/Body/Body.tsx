/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
import { fontColor, fontFamily, fontSize, fontWeight } from "handy-tokens";

const headingStyles = css`
  font-family: ${fontFamily.regular};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.light};
`;

const defaultStyles = css`
  color: ${fontColor.base};
`;

const lightStyles = css`
  color: ${fontColor.light};
`;

const lighterStyles = css`
  color: ${fontColor.lighter};
`;

export interface HeadingProps extends WithClassName, WithCSS {
  children?: React.ReactNode;
  color?: "default" | "light" | "lighter";
  text?: string;
}

const styleMap = {
  default: defaultStyles,
  light: lightStyles,
  lighter: lighterStyles
};

export const Heading: FC<HeadingProps> = ({
  children,
  className,
  css,
  text,
  color = "default"
}) => (
  <p
    css={[headingStyles, styleMap[color], css]}
    className={`handy-body ${className}`}
  >
    {text || children}
  </p>
);

export default Heading;
