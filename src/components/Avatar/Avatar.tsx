/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS, WithMargin, WithPadding } from "@uihandbook/handy-types";
import { setMargin, setPadding, toNegative } from "@uihandbook/handy-functions";
import { Image, ImageProps } from "../Image/Image";
import {
  StatusIndicator,
  StatusIndicatorProps
} from "../StatusIndicator/StatusIndicator";
import { statusSize } from "../Status/Status";
import { colors } from "@uihandbook/handy-tokens";

const avatarStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export interface AvatarProps
  extends ImageProps,
    StatusIndicatorProps,
    WithClassName,
    WithCSS,
    WithMargin,
    WithPadding {
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

const circlePositionMap = {
  smallest: -6,
  smaller: -5,
  small: 0,
  medium: 2,
  large: 5,
  larger: 12,
  largest: 22
};

const AvatarContent: FC<AvatarProps> = ({
  circle,
  className,
  css,
  margin = "0px",
  padding = "0px",
  rounded,
  avatarSize = "medium",
  status,
  ...props
}) => (
  <div
    css={[avatarStyles, setMargin(margin), setPadding(padding), css]}
    className={`handy-avatar ${className}`}
  >
    <Image
      responsive
      width={avatarSizes[avatarSize]}
      height={avatarSizes[avatarSize]}
      rounded={false}
      css={[
        circle ? `border-radius: ${avatarSizes[avatarSize] / 2}px;` : null,
        rounded ? `border-radius: ${avatarSizes[avatarSize] * 0.2}px;` : null,
        `background-color: ${colors.light_900};`
      ]}
      {...props}
    />
  </div>
);

export const Avatar: FC<AvatarProps> = ({
  avatarSize = "medium",
  circle,
  status,
  ...props
}) => {
  const statusPosition = circle
    ? {
        top: `${circlePositionMap[avatarSize]}px`,
        right: `${circlePositionMap[avatarSize]}px`
      }
    : {
        top: `${toNegative(statusSize / 2)}px`,
        right: `${toNegative(statusSize / 2)}px`
      };
  return (
    <div>
      {status ? (
        <StatusIndicator status={status} position={statusPosition} {...props}>
          <AvatarContent avatarSize={avatarSize} circle={circle} {...props} />
        </StatusIndicator>
      ) : (
        <AvatarContent avatarSize={avatarSize} circle={circle} {...props} />
      )}
    </div>
  );
};

export default Avatar;
