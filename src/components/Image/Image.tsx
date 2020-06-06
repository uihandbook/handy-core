/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
import { borderRadius, borders, spacing } from "handy-tokens";

const imageStyles = css`
  display: inline-block;
  box-sizing: border-box;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`;

const hiddenImageStyles = css`
  visibility: hidden;
`;

const roundedStyles = css`
  border-radius: ${borderRadius.largest};
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
  rounded = false,
  src,
  width
}) => (
  <div
    css={[
      imageStyles,
      `background-image:url('${src}');`,
      width ? `width:${width}px;` : null,
      height ? `height:${height}px;` : null,
      rounded ? roundedStyles : null,
      css
    ]}
    title={alt}
    className={`handy-image ${className}`}
  >
    <img css={hiddenImageStyles} src={src} />
  </div>
);

export default Image;
