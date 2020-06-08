/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";

export type StarterComponentProps = WithClassName & WithCSS;

export const StarterComponent: FC<StarterComponentProps> = ({className, css}) => {
  return (
    <div
      className={`handy-starter-component ${className}`}
      css={css}
    ></div>
  );
};

export default StarterComponent;
