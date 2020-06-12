import React from "react";
import { storiesOf } from "@storybook/react";
import { colors } from "@uihandbook/handy-tokens";

import Button from "./Button";

storiesOf("Button", module)
  .add("Default", () => <Button text="Button" />)
  .add("Option: Size", () => <div>
    <Button text="Button" size="small" /> <br/><br/>
    <Button text="Button" size="default" /> <br/><br/>
    <Button text="Button" size="large" /> <br/><br/>
  </div>)
  .add("Option: Color", () => <div>
    <Button text="Button" background={colors.septenary_900} /> <br/><br/>
    <Button text="Button" background={colors.quinary_900} /> <br/><br/>
    <Button text="Button" background={colors.quaternary_900} /> <br/><br/>
  </div>)
  .add("Option: Status", () => <div>
    <Button text="Button" status="success" /> <br/><br/>
    <Button text="Button" status="warning" /> <br/><br/>
    <Button text="Button" status="error" /> <br/><br/>
  </div>)
  .add("Option: Rounded", () => <div>
    <Button text="Default Button" /> <br/><br/>
    <Button text="Rounded Button" rounded /> <br/><br/>
  </div>)
  .add("Option: Inverse", () => <div>
    <Button text="Default Button" /> <br/><br/>
    <Button text="Inverse Button" status="neutral" inverse /> <br/><br/>
  </div>)
  .add("Option: Disabled", () => <div>
    <Button text="Default Button" /> <br/><br/>
    <Button text="Disabled Button" disabled /> <br/><br/>
  </div>)
  .add("Option: Loading", () => <div>
    <Button text="Default Button" /> <br/><br/>
    <Button text="Loading Button" loading /> <br/><br/>
  </div>);
