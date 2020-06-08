import React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar } from "../Avatar/Avatar";
import { Heading } from "../Heading/Heading";

import StatusIndicator from "./StatusIndicator";

storiesOf("StatusIndicator", module)
  .add("Text", () => <StatusIndicator status="success" position={{top: "3px", right: "-20px"}}><Heading text="James Palmer" /></StatusIndicator>)
  .add("Avatar", () => <StatusIndicator status="success" position={{top: "3px", right: "0px"}}><Avatar circle avatarSize="medium" src="https://source.unsplash.com/300x300?face" /></StatusIndicator>)
  .add("Option: Position", () => <div>
    <StatusIndicator status="error" position={{top: "3px", right: "0px"}}><Avatar circle avatarSize="medium" src="https://source.unsplash.com/300x300?face" /></StatusIndicator><br/><br/>
    <StatusIndicator status="error" position={{top: "3px", left: "0px"}}><Avatar circle avatarSize="medium" src="https://source.unsplash.com/300x300?face" /></StatusIndicator><br/><br/>
    <StatusIndicator status="error" position={{top: "3px", right: "-20px"}}><Heading headingSize={4} text="Text Example" /></StatusIndicator>
  </div>);
