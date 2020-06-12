import React from "react";
import { storiesOf } from "@storybook/react";

import Caption from "./Caption";

storiesOf("Caption", module)
  .add("Default", () => <Caption text="Caption (Default)" />)
  .add("Option: Caps", () => <Caption caps text="Caption (All Caps)" />);
