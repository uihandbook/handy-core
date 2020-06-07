import React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar } from "../Avatar/Avatar";
import { Heading } from "../Heading/Heading";

import Indicator from "./Indicator";

storiesOf("Indicator", module)
  .add("Text", () => <Indicator status="success" position={{top: "3px", right: "-20px"}}><Heading text="James Palmer" /></Indicator>)
  .add("Avatar", () => <Indicator status="success" position={{top: "3px", right: "2px"}}><Avatar circle avatarSize="medium" src="https://source.unsplash.com/300x300?face" /></Indicator>)
  .add("Option: Status", () => <div>
    <Indicator status="neutral" position={{top: "3px", right: "-20px"}}><Heading headingSize={4} text="Neutral" /></Indicator><br/><br/>
    <Indicator status="success" position={{top: "3px", right: "-20px"}}><Heading headingSize={4} text="Success" /></Indicator><br/><br/>
    <Indicator status="warning" position={{top: "3px", right: "-20px"}}><Heading headingSize={4} text="Warning" /></Indicator><br/><br/>
    <Indicator status="error" position={{top: "3px", right: "-20px"}}><Heading headingSize={4} text="Error" /></Indicator><br/><br/>
    <Indicator status="info" position={{top: "3px", right: "-20px"}}><Heading headingSize={4} text="Info" /></Indicator>
  </div>)
  .add("Option: Position", () => <div>
    <Indicator status="error" position={{top: "3px", right: "0px"}}><Avatar circle avatarSize="medium" src="https://source.unsplash.com/300x300?face" /></Indicator><br/><br/>
    <Indicator status="error" position={{top: "3px", left: "0px"}}><Avatar circle avatarSize="medium" src="https://source.unsplash.com/300x300?face" /></Indicator><br/><br/>
    <Indicator status="error" position={{top: "3px", right: "-20px"}}><Heading headingSize={4} text="Text Example" /></Indicator>
  </div>);
