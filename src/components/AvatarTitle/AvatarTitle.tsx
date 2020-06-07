/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS, WithMargin, WithPadding } from "handy-types";
import { setMargin, setPadding } from "handy-functions";
import { Avatar, AvatarProps } from "../Avatar/Avatar";
import { Title, TitleProps } from "../Title/Title";
import { spacing } from "handy-tokens";

const titleStyles = css`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

const stackedStyles = css`
  flex-direction: column;
  justify-content: center;
`;

export interface AvatarTitleProps
  extends AvatarProps,
    TitleProps,
    WithClassName,
    WithCSS,
    WithMargin,
    WithPadding {
  stacked?: boolean;
}

export const AvatarTitle: FC<AvatarTitleProps> = ({
  avatarSize = "small",
  className,
  css,
  margin = "0px",
  padding = "0px",
  stacked = false,
  titleSize = 3,
  ...props
}) => (
  <div
    css={[
      titleStyles,
      stacked ? stackedStyles : null,
      setMargin(margin),
      setPadding(padding),
      css
    ]}
    className={`handy-avatar-title ${className}`}
  >
    <Avatar
      avatarSize={avatarSize}
      margin={stacked ? { bottom: spacing.small } : { right: spacing.large }}
      {...props}
    />
    <Title
      titleSize={titleSize}
      align={stacked ? "center" : "left"}
      {...props}
    />
  </div>
);

export default AvatarTitle;
