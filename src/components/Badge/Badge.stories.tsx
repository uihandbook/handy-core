import React from "react";
import { storiesOf } from "@storybook/react";

import Badge from "./Badge";

storiesOf("Badge", module)
  .add("Default", () => <Badge text="Badge" />)
  .add("Option: Status", () => <div>
    <Badge text="Error" status="error" /> <br/><br/>
    <Badge text="Warning" status="warning" /> <br/><br/>
    <Badge text="Success" status="success" /> <br/><br/>
    <Badge text="Info" status="info" /> <br/><br/>
    <Badge text="Neutral" status="neutral" /> <br/><br/>
  </div>);
