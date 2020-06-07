import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "./Heading";

storiesOf("Heading", module)
  .add("Heading 1", () => <Heading headingSize={1} text="Heading 1" />)
  .add("Heading 2", () => <Heading headingSize={2} text="Heading 2" />)
  .add("Heading 3", () => <Heading headingSize={3} text="Heading 3" />)
  .add("Heading 4", () => <Heading headingSize={4} text="Heading 4" />);
