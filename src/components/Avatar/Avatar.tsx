/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
import { Image, ImageProps } from "../Image/Image";

export interface AvatarProps extends ImageProps, WithClassName, WithCSS {
  circle?: boolean;
  avatarSize?:
    | "smallest"
    | "smaller"
    | "small"
    | "medium"
    | "large"
    | "larger"
    | "largest";
}

export const avatarSizes = {
  smallest: 22,
  smaller: 30,
  small: 50,
  medium: 66,
  large: 88,
  larger: 130,
  largest: 200
};

export const Avatar: FC<AvatarProps> = ({
  circle = false,
  className,
  css,
  rounded,
  avatarSize = "large",
  ...props
}) => (
  <div css={css} className={`handy-avatar ${className}`}>
    <Image
      responsive
      width={avatarSizes[avatarSize]}
      height={avatarSizes[avatarSize]}
      rounded={false}
      css={[
        circle ? `border-radius: ${avatarSizes[avatarSize] / 2}px;` : null,
        rounded ? `border-radius: ${avatarSizes[avatarSize] * 0.2}px;` : null
      ]}
      {...props}
    />
  </div>
);

export default Avatar;
