/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS, WithPadding, WithMargin } from "@uihandbook/handy-types";
import { setMargin, setPadding } from "@uihandbook/handy-functions";

export type StarterComponentWithSpacingProps = WithClassName &
  WithCSS &
  WithPadding &
  WithMargin;

export const StarterComponentWithSpacing: FC<StarterComponentWithSpacingProps> = ({
  className,
  css,
  padding = "0px",
  margin = "0px"
}) => {
  return (
    <div
      className={`handy-starter-component-with-spacing ${className}`}
      css={[setMargin(margin), setPadding(padding), css]}
    ></div>
  );
};

export default StarterComponentWithSpacing;
