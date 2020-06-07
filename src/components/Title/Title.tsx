/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
import { Heading } from "../Heading/Heading";
import { Body } from "../Body/Body";

const titleStyles = css``;

export interface TitleProps extends WithClassName, WithCSS {
  children?: React.ReactNode;
  heading?: string;
  body?: string;
  size?: 1 | 2 | 3 | 4;
}

export const Title: FC<TitleProps> = ({
  body,
  children,
  className,
  css,
  heading,
  size = 3
}) => {
  return (
    <div css={css} className={`handy-title ${className}`}>
      <Heading size={size} text={heading} />
      <Body color="light">
        {body || children}
      </Body>
    </div>
  );
};

export default Title;
