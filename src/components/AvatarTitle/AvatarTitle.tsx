/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
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

export interface AvatarTitleProps extends AvatarProps, TitleProps, WithClassName, WithCSS {
  stacked?: boolean;
}

export const AvatarTitle: FC<AvatarTitleProps> = ({
  avatarSize = "small",
  className,
  css,
  stacked = false,
  titleSize = 3,
  ...props
}) => (
  <div css={[titleStyles, stacked ? stackedStyles : null, css]} className={`handy-avatar-title ${className}`}>
    <Avatar avatarSize={avatarSize} margin={stacked ? {bottom: spacing.small} : {right: spacing.large}} {...props} />
    <Title titleSize={titleSize} align={stacked ? "center" : "left"} {...props} />
  </div>
);

export default AvatarTitle;
