import React from "react";
import { storiesOf } from "@storybook/react";
import { shadows, spacing } from "handy-tokens";
import { AvatarTitle } from "../AvatarTitle/AvatarTitle";
import { Heading } from "../Heading/Heading";

import Card from "./Card";

storiesOf("Card", module)
  .add("Shape: Rounded", () => (
    <Card padding={spacing.larger}>
      <Heading text="Rounded Card" />
    </Card>
  ))
  .add("Shape: Square", () => (
    <Card rounded={false} padding={spacing.larger}>
      <Heading text="Square Card" />
    </Card>
  ))
  .add("Option: With Content", () => (
    <Card padding={spacing.largest}>
      <AvatarTitle
        circle
        stacked
        avatarSize="large"
        src="https://source.unsplash.com/300x300?face"
        heading="Corey Johnson"
      >
        CEO of Company
      </AvatarTitle>
    </Card>
  ))
  .add("Option: Shadow", () => (
    <Card shadow={shadows.largest} padding={spacing.largest}>
      <AvatarTitle
        circle
        stacked
        avatarSize="large"
        src="https://source.unsplash.com/300x300?face"
        heading="Corey Johnson"
      >
        CEO of Company
      </AvatarTitle>
    </Card>
  ));
