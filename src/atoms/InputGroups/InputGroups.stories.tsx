import React from 'react';
import InputGroups from './InputGroups';

export default {
  title: 'Atoms/InputGroups',
  component: InputGroups,
};

function Template(args) {
  return <InputGroups {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  className: '',
};
