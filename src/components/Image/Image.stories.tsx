import React from "react";
import { storiesOf } from "@storybook/react";
import { shadows } from "handy-tokens";

import Image from "./Image";

storiesOf("Image", module)
  .add("Shape: Default", () => <Image src="https://source.unsplash.com/400x300?nature" />)
  .add("Shape: Rounded", () => <Image rounded src="https://source.unsplash.com/400x300?nature" />)
  .add("Option: Set Size", () => <Image width={100} height={400} src="https://source.unsplash.com/400x300?nature" />)
  .add("Option: Shadow", () => <Image shadow={shadows.largest} rounded width={200} height={200} src="https://source.unsplash.com/400x300?nature" />);
