/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
import { borderRadius, borders, spacing } from "handy-tokens";

const imageStyles = css`
  &,
  & > img {
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
  }
`;

const responsiveStyles = css`
  &,
  & > img {
    width: 100%;
    height: auto;
  }
`;

const roundedStyles = css`
  border-radius: ${borderRadius.largest};
`;

const thumbnailStyles = css`
  border: 1px solid ${borders.base};
  padding: ${spacing.small};
`;

export interface ImageProps extends WithClassName, WithCSS {
  alt?: string;
  height?: number;
  responsive?: boolean;
  rounded?: boolean;
  src: string;
  thumbnail?: boolean;
  width?: number;
}

export const Image: FC<ImageProps> = ({
  alt = "Image",
  className,
  css,
  height,
  responsive = false,
  rounded = false,
  src,
  thumbnail = false,
  width
}) => (
  <div css={[imageStyles, thumbnail ? thumbnailStyles : null, responsive ? responsiveStyles : null, css]} className={`handy-image ${className}`}>
    <img
      css={[
        height ? `height:auto; max-height: ${height}px;` : null,
        rounded ? roundedStyles : null,
        width ? `width: auto; max-width: ${width}px;` : null,
      ]}
      src={src}
      alt={alt}
    />
  </div>
);

export default Image;
