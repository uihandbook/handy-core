/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { Body, BodyProps } from "../Body/Body";
import { fontSize, fontWeight, letterSpacing } from "@uihandbook/handy-tokens";

const captionStyles = css`
  font-size: ${fontSize.small};
`;

const capsStyles = css`
  text-transform: uppercase;
  font-size: ${fontSize.smaller};
  font-weight: ${fontWeight.bold};
  letter-spacing: ${letterSpacing.larger};
`;

export interface CaptionProps extends BodyProps {
  caps?: boolean;
}

export const Caption: FC<CaptionProps> = ({ caps = false, css, ...props }) => (
  <Body
    {...props}
    color="light"
    css={[captionStyles, caps ? capsStyles : null, css]}
  />
);

export default Caption;
