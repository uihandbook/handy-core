import React from "react";
import { storiesOf } from "@storybook/react";

import Status from "./Status";

storiesOf("Status", module)
  .add("Colors", () => <div>
    <Status status="neutral" />
    <Status status="success" />
    <Status status="warning" />
    <Status status="error" />
    <Status status="info" />
  </div>);
