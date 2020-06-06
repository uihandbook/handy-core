import React from "react";
import { storiesOf } from "@storybook/react";

import Image from "./Image";

storiesOf("Image", module)
  .add("Default", () => <Image src="https://source.unsplash.com/800x600?nature" />)
  .add("Responsive", () => <Image responsive src="https://source.unsplash.com/800x600?nature" />)
  .add("Thumbnail", () => <Image thumbnail src="https://source.unsplash.com/800x600?nature" />)
  .add("Rounded", () => <Image rounded src="https://source.unsplash.com/800x600?nature" />)
  .add("Set Size", () => <Image width={200} height={200} src="https://source.unsplash.com/800x600?nature" />);
