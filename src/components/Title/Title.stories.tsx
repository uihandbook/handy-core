import React from "react";
import { storiesOf } from "@storybook/react";

import Title from "./Title";

storiesOf("Title", module)
  .add("Title 1", () => <Title size={1} heading="Title 1" body="Body text here" />)
  .add("Title 2", () => <Title size={2} heading="Title 2" body="Body text here" />)
  .add("Title 3", () => <Title size={3} heading="Title 3" body="Body text here" />)
  .add("Title 4", () => <Title size={4} heading="Title 4" body="Body text here" />);
