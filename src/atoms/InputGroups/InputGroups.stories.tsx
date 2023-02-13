import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputGroups from './InputGroups';

export default {
  title: 'Atoms/InputGroups',
  component: InputGroups,
} as ComponentMeta<typeof InputGroups>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof InputGroups> = (args) => <InputGroups {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'label',
  placeholder: 'placeholder',
  type: 'text',
  error: false,
  helperText: 'Helper text',
};

Default.argTypes = {
  type: {
    options: ['text', 'number', 'email', 'password', 'search', 'tel', 'url'],
    control: { type: 'select' },
  },
  className: {
    table: {
      disable: true,
    },
  },
  error: {
    control: { type: 'text' },
  },
};
