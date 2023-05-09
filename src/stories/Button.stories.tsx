import React from "react";
import { Button, Props } from "../shared/components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      defaultValue: "Button",
    },
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "tertiary",
          "transparency",
          "success",
          "warn",
          "danger",
        ],
      },
      defaultValue: "primary",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      defaultValue: "small",
    },
    minWidth: {
      control: {
        type: "number",
      },
      defaultValue: 120,
    },
  },
};

const Template = (args: Props) => <Button {...args} />;
export const Sample = Template.bind({});
