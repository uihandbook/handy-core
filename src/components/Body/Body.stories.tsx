import React from "react";
import { storiesOf } from "@storybook/react";

import Body from "./Body";

storiesOf("Body", module)
  .add("Default", () => <Body text="Body (Default)" />)
  .add("Light", () => <Body color="light" text="Body (Light)" />)
  .add("Lighter", () => <Body color="lighter" text="Body (Lighter)" />);
