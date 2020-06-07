import React from "react";
import { storiesOf } from "@storybook/react";

import Title from "./Title";

storiesOf("Title", module)
  .add("Title 1", () => <Title titleSize={1} heading="Title 1" body="Body text here" />)
  .add("Title 2", () => <Title titleSize={2} heading="Title 2" body="Body text here" />)
  .add("Title 3", () => <Title titleSize={3} heading="Title 3" body="Body text here" />)
  .add("Title 4", () => <Title titleSize={4} heading="Title 4" body="Body text here" />);
