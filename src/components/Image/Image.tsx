/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import {
  WithClassName,
  WithCSS,
  WithMargin,
  WithPadding,
  WithShadow
} from "handy-types";
import { setMargin, setPadding } from "handy-functions";
import { borderRadius, colors } from "handy-tokens";
import { rgba } from "handy-functions";

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

export interface ImageProps
  extends WithClassName,
    WithCSS,
    WithMargin,
    WithPadding,
    WithShadow {
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
  margin = "0px",
  padding = "0px",
  rounded = false,
  shadow,
  shadowColor = rgba(colors.dark_500),
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
      shadow ? `box-shadow: ${shadow} ${shadowColor};` : null,
      setMargin(margin),
      setPadding(padding),
      css
    ]}
    title={alt}
    className={`handy-image ${className}`}
  >
    <img css={hiddenImageStyles} src={src} alt={alt} />
  </div>
);

export default Image;
