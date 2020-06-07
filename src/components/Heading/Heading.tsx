/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "handy-types";
import { fontColor, fontFamily, fontSize, fontWeight } from "handy-tokens";

const headingStyles = css`
  font-family: ${fontFamily.regular};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.bold};
  color: ${fontColor.base};
  margin: 0;
`;

const h1Styles = css`
  font-size: ${fontSize.largest};
`;

const h2Styles = css`
  font-size: ${fontSize.larger};
`;

const h3Styles = css`
  font-size: ${fontSize.large};
`;

const h4Styles = css`
  font-size: ${fontSize.base};
`;

export interface HeadingProps extends WithClassName, WithCSS {
  children?: React.ReactNode;
  headingSize?: 1 | 2 | 3 | 4;
  text?: string;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4";

const styleMap = {
  1: h1Styles,
  2: h2Styles,
  3: h3Styles,
  4: h4Styles
};

export const Heading: FC<HeadingProps> = ({
  children,
  className,
  css,
  text,
  headingSize = 3
}) => {
  const Tag = `h${headingSize}` as HeadingTag;

  return (
    <Tag
      css={[headingStyles, styleMap[headingSize], css]}
      className={`handy-heading ${className}`}
    >
      {text || children}
    </Tag>
  );
};

export default Heading;
