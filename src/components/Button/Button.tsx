/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC, SyntheticEvent } from "react";
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
import {
  borderRadius,
  colors,
  fontColor,
  fontSize,
  fontWeight,
  letterSpacing,
  opacity,
  spacing,
  statusColors
} from "@uihandbook/handy-tokens";

export const buttonSize = 44;

const buttonStyles = css`
  border: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${buttonSize}px;
  border-radius: ${borderRadius.larger};
  color: ${rgba(fontColor.white, opacity._9)};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.small};
  letter-spacing: ${letterSpacing.larger};
`;

const btnBlockStyles = css`
  width: 100%;
  display: flex;
`;

const btnDisabledStyles = css`
  pointer-events: none;
  cursor: not-allowed;
  opacity: ${opacity._7};
`;

export interface ButtonProps
  extends WithBackground,
    WithClassName,
    WithCSS,
    WithPadding,
    WithMargin,
    WithShadow,
    WithStatus {
  block?: boolean;
  disabled?: boolean;
  link?: boolean;
  loading?: boolean;
  onClick?: (e: SyntheticEvent) => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
  text?: string;
}

type ButtonTag = "h1" | "h2" | "h3" | "h4";

export const Button: FC<ButtonProps> = ({
  background = colors.primary_900,
  block,
  children,
  className,
  css,
  disabled = false,
  padding = {
    top: "0px",
    right: spacing.largest,
    bottom: "0px",
    left: spacing.largest
  },
  link = false,
  loading = false,
  margin = "0px",
  onClick,
  shadow,
  shadowColor = rgba(colors.dark_900, opacity._2),
  status,
  target = "_self",
  text
}) => {
  const Tag = link ? `a` : (`button` as ButtonTag);

  return (
    <Tag
      className={`handy-button ${className}`}
      css={[
        buttonStyles,
        setMargin(margin),
        setPadding(padding),
        shadow ? `box-shadow: ${shadow} ${shadowColor};` : null,
        background ? `background-color: ${background};` : null,
        status ? `background-color: ${statusColors[`${status}_500`]};` : null,
        block ? btnBlockStyles : null,
        disabled ? btnDisabledStyles : null,
        css
      ]}
      {...(link ? `target=${target}` : null)}
      {...(disabled ? `disabled=${disabled}` : null)}
      onClick={onClick}
    >
      {loading ? <span></span> : <span>{text || children}</span>}
    </Tag>
  );
};

export default Button;
