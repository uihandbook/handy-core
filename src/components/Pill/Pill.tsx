/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FC } from "react";
import { WithClassName, WithCSS } from "@uihandbook/handy-types";
import { Badge, BadgeProps, badgeSize } from "../Badge/Badge";

const pillStyles = css`
  border-radius: ${badgeSize/2}px;
`;

export type PillProps = BadgeProps & WithClassName & WithCSS;

export const Pill: FC<PillProps> = ({className, css, ...props}) => {
  return (
    <div className={`handy-pill ${className}`}>
      <Badge {...props} css={[pillStyles, css]} />
    </div>
  );
};

export default Pill;
