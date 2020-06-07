import React from "react";
import { storiesOf } from "@storybook/react";
import { shadows } from "handy-tokens";

import Avatar from "./Avatar";

storiesOf("Avatar", module)
  .add("Shape: Default", () => <div>
    <Avatar size="smallest" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar size="smaller" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar size="small" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar size="medium" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar size="large" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar size="larger" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar size="largest" src="https://source.unsplash.com/300x300?face" />
  </div>)
  .add("Shape: Rounded", () => <div>
    <Avatar rounded size="smallest" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded size="smaller" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded size="small" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded size="medium" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded size="large" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded size="larger" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded size="largest" src="https://source.unsplash.com/300x300?face" />
  </div>)
  .add("Shape: Circle", () => <div>
    <Avatar circle size="smallest" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle size="smaller" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle size="small" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle size="medium" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle size="large" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle size="larger" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle size="largest" src="https://source.unsplash.com/300x300?face" />
  </div>)
  .add("Option: Shadow", () => <div>
    <Avatar circle shadow={shadows.larger} size="medium" src="https://source.unsplash.com/300x300?face" /> <br/>
  </div>);
