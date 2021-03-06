import React from "react";
import { storiesOf } from "@storybook/react";

import Avatar from "./Avatar";

storiesOf("Avatar", module)
  .add("Shape: Default", () => <div>
    <Avatar avatarSize="smallest" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar avatarSize="smaller" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar avatarSize="small" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar avatarSize="medium" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar avatarSize="large" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar avatarSize="larger" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar avatarSize="largest" src="https://source.unsplash.com/300x300?face" />
  </div>)
  .add("Shape: Rounded", () => <div>
    <Avatar rounded avatarSize="smallest" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded avatarSize="smaller" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded avatarSize="small" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded avatarSize="medium" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded avatarSize="large" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded avatarSize="larger" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar rounded avatarSize="largest" src="https://source.unsplash.com/300x300?face" />
  </div>)
  .add("Shape: Circle", () => <div>
    <Avatar circle avatarSize="smallest" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle avatarSize="smaller" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle avatarSize="small" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle avatarSize="medium" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle avatarSize="large" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle avatarSize="larger" src="https://source.unsplash.com/300x300?face" /> <br/>
    <Avatar circle avatarSize="largest" src="https://source.unsplash.com/300x300?face" />
  </div>)
  .add("Option: Status", () => <div>
    <Avatar status="success" avatarSize="medium" src="https://source.unsplash.com/300x300?face" /><br/>
    <Avatar status="success" rounded avatarSize="medium" src="https://source.unsplash.com/300x300?face" /><br/>
    <Avatar status="success" circle avatarSize="smallest" src="https://source.unsplash.com/300x300?face" /><br/>
    <Avatar status="success" circle avatarSize="smaller" src="https://source.unsplash.com/300x300?face" /><br/>
    <Avatar status="success" circle avatarSize="small" src="https://source.unsplash.com/300x300?face" /><br/>
    <Avatar status="success" circle avatarSize="medium" src="https://source.unsplash.com/300x300?face" /><br/>
    <Avatar status="success" circle avatarSize="large" src="https://source.unsplash.com/300x300?face" /><br/>
    <Avatar status="success" circle avatarSize="larger" src="https://source.unsplash.com/300x300?face" /><br/>
    <Avatar status="success" circle avatarSize="largest" src="https://source.unsplash.com/300x300?face" /><br/>
  </div>);
