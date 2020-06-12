/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC, Fragment, SyntheticEvent } from "react";
import {
  WithBackground,
  WithClassName,
  WithCSS,
  WithPadding,
  WithMargin,
  WithShadow,
  WithStatus
} from "@uihandbook/handy-types";
import {
  rgba,
  setMargin,
  setPadding,
  shade
} from "@uihandbook/handy-functions";
import {
  colors,
  fontColor,
  fontSize,
  fontWeight,
  letterSpacing,
  opacity,
  spacing,
  statusColors
} from "@uihandbook/handy-tokens";

export const buttonSizes = {
  small: 32,
  default: 40,
  large: 50
};

const buttonStyles = css`
  border: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.small};
  letter-spacing: ${letterSpacing.larger};
  position: relative;

  &,
  &:focus,
  &:active,
  &:visited {
    outline: none;
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const btnBlockStyles = css`
  width: 100%;
  display: flex;
`;

const btnDisabledStyles = css`
  cursor: not-allowed;
  opacity: ${opacity._7};
`;

const btnLoadingStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const btnLoadingTextStyles = css`
  opacity: 0;
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
  inverse?: boolean;
  rounded?: boolean;
  size?: "small" | "default" | "large";
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
  inverse = false,
  link = false,
  loading = false,
  margin = "0px",
  onClick,
  rounded = false,
  shadow,
  shadowColor = rgba(colors.dark_900, opacity._2),
  size = "default",
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
        inverse ? `color: ${rgba(fontColor.base, opacity._8)};` : `color: ${rgba(fontColor.white, opacity._9)};`,
        shadow ? `box-shadow: ${shadow} ${shadowColor};` : null,
        background ? `background-color: ${background};` : null,
        status
          ? `background-color: ${statusColors[`${status}_500`]};
             color: ${shade(statusColors[`${status}_900`], opacity._5)};`
          : null,
        block ? btnBlockStyles : null,
        disabled ? btnDisabledStyles : null,
        `height:${buttonSizes[size]}px;`,
        rounded ? `border-radius: ${buttonSizes[size] / 2}px` : `border-radius: ${buttonSizes[size] / 3.5}px`,
        css
      ]}
      {...(link ? `target=${target}` : null)}
      {...(disabled ? `disabled=${disabled}` : null)}
      {...(!!disabled && { onClick: onClick })}
    >
      {loading && <span css={btnLoadingStyles}>...</span>}
      <span css={loading ? btnLoadingTextStyles : null}>{text || children}</span>
    </Tag>
  );
};

export default Button;
