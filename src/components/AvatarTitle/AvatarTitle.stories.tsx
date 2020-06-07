import React from "react";
import { storiesOf } from "@storybook/react";

import AvatarTitle from "./AvatarTitle";

storiesOf("AvatarTitle", module).add("Shape: Default", () => (
  <div>
    <AvatarTitle
      src="https://source.unsplash.com/300x300?face"
      heading="Corey Johnson"
    >
      CEO of Company
    </AvatarTitle>
    <br />
  </div>
))
.add("Shape: Rounded", () => (
  <div>
    <AvatarTitle
      rounded
      src="https://source.unsplash.com/300x300?face"
      heading="Corey Johnson"
    >
      CEO of Company
    </AvatarTitle>
    <br />
  </div>
))
.add("Shape: Circle", () => (
  <div>
    <AvatarTitle
      circle
      src="https://source.unsplash.com/300x300?face"
      heading="Corey Johnson"
    >
      CEO of Company
    </AvatarTitle>
    <br />
  </div>
))
.add("Option: Stacked", () => (
  <div>
    <AvatarTitle
      circle
      stacked
      avatarSize="large"
      titleSize={2}
      src="https://source.unsplash.com/300x300?face"
      heading="Corey Johnson"
    >
      CEO of Company
    </AvatarTitle>
    <br />
  </div>
));
