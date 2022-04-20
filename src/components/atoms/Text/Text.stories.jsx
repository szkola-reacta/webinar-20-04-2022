// import React from 'react';

import { Text } from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Text',
  component: Text,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args} />;

export const DefaultText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultText.args = {
  children: 'Lorem ipsum',
};
