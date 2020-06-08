/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS, WithMargin, WithPadding } from "handy-types";
import { setMargin, setPadding } from "handy-functions";
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

export interface TitleProps
  extends WithClassName,
    WithCSS,
    WithMargin,
    WithPadding {
  align?: "left" | "center" | "right";
  heading?: string;
  body?: string;
  titleSize?: 1 | 2 | 3 | 4;
}

const alignMap = {
  left: alignLeftStyles,
  center: alignCenterStyles,
  right: alignRightStyles
};

export const Title: FC<TitleProps> = ({
  align = "left",
  body,
  children,
  className,
  css,
  heading,
  margin = "0px",
  padding = "0px",
  titleSize = 3
}) => {
  return (
    <div
      css={[
        titleStyles,
        alignMap[align],
        setMargin(margin),
        setPadding(padding),
        css
      ]}
      className={`handy-title ${className}`}
    >
      <Heading
        headingSize={titleSize}
        text={heading}
        margin={{ bottom: spacing.smallest }}
      />
      <Body color="light">{body || children}</Body>
    </div>
  );
};

export default Title;
