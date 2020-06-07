/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
import { Heading } from "../Heading/Heading";
import { Body } from "../Body/Body";
import { spacing } from "handy-tokens";

const titleStyles = css`
  display: inline-flex;
  flex-direction: column;
`;

const alignLeftStyles = css`
  align-items: flex-start;
`;

const alignCenterStyles = css`
  align-items: center;
`;

const alignRightStyles = css`
  align-items: flex-end;
`;

export interface TitleProps extends WithClassName, WithCSS {
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
  heading?: string;
  body?: string;
  titleSize?: 1 | 2 | 3 | 4;
}

const alignMap = {
  "left": alignLeftStyles,
  "center": alignCenterStyles,
  "right": alignRightStyles,
}

export const Title: FC<TitleProps> = ({
  align = "left",
  body,
  children,
  className,
  css,
  heading,
  titleSize = 3
}) => {
  return (
    <div css={[titleStyles, alignMap[align], css]} className={`handy-title ${className}`}>
      <Heading headingSize={titleSize} text={heading} margin={{bottom: spacing.smallest}} />
      <Body color="light">
        {body || children}
      </Body>
    </div>
  );
};

export default Title;
