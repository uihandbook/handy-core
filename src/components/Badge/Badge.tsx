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
import {
  colors,
  borderRadius,
  fontColor,
  fontFamily,
  fontSize,
  fontWeight,
  opacity,
  spacing,
  statusColors
} from "@uihandbook/handy-tokens";

export const badgeSize = 18;

const badgeStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${badgeSize}px;
  border-radius: ${borderRadius.small};
  font-size: ${fontSize.smallest};
  font-family: ${fontFamily.regular};
  font-weight: ${fontWeight.regular};
  color: ${rgba(fontColor.base, opacity._9)};
`;

export interface BadgeProps
  extends WithBackground,
    WithClassName,
    WithCSS,
    WithPadding,
    WithMargin,
    WithShadow,
    WithStatus {
  text?: string;
}

export const Badge: FC<BadgeProps> = ({
  background = colors.light_900,
  children,
  className,
  css,
  padding = {
    top: "0px",
    right: spacing.small,
    bottom: "0px",
    left: spacing.small
  },
  margin = "0px",
  shadow,
  shadowColor = rgba(colors.dark_900, opacity._2),
  status,
  text
}) => {
  return (
    <div
      className={`handy-badge ${className}`}
      css={[
        badgeStyles,
        setMargin(margin),
        setPadding(padding),
        shadow ? `box-shadow: ${shadow} ${shadowColor};` : null,
        background ? `background-color: ${background};` : null,
        status ? `background-color: ${statusColors[`${status}_500`]};` : null,
        css
      ]}
    >
      {text || children}
    </div>
  );
};

export default Badge;
