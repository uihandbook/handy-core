/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
import { Image, ImageProps } from "../Image/Image";

const avatarStyles = css`
  overflow: hidden;
`;

export interface AvatarProps extends ImageProps, WithClassName, WithCSS {
  circle?: boolean;
  size?:
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
  size = "large",
  ...props
}) => (
  <div css={[avatarStyles, css]} className={`handy-avatar ${className}`}>
    <Image
      responsive
      width={avatarSizes[size]}
      height={avatarSizes[size]}
      rounded={false}
      {...props}
      css={[
        circle ? `border-radius: ${avatarSizes[size] / 2}px;` : null,
        rounded ? `border-radius: ${avatarSizes[size] * 0.2}px;` : null
      ]}
    />
  </div>
);

export default Avatar;
