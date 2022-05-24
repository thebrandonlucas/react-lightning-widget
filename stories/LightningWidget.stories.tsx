import React from "react";
import { Meta, Story } from "@storybook/react";
import LightningWidget, { LightningWidgetProps } from "../src";

const meta: Meta = {
  title: "Welcome",
  component: LightningWidget,
  argTypes: {
    children: {
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<LightningWidgetProps> = args => (
  <LightningWidget {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({
  name: "Brandon Lucas",
  image:
    "https://pbs.twimg.com/profile_images/1521937468563537925/UV3WAnF5_400x400.jpg",
  to: "bslucas@getalby.com"
});

Default.args = {};
