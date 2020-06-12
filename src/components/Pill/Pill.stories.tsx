import React from "react";
import { storiesOf } from "@storybook/react";

import Pill from "./Pill";

storiesOf("Pill", module)
  .add("Default", () => <Pill text="Pill" />)
  .add("Option: Status", () => <div>
    <Pill text="Error" status="error" /> <br/><br/>
    <Pill text="Warning" status="warning" /> <br/><br/>
    <Pill text="Success" status="success" /> <br/><br/>
    <Pill text="Info" status="info" /> <br/><br/>
    <Pill text="Neutral" status="neutral" /> <br/><br/>
  </div>);
