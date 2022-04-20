import { MagicButton } from './MagicButton';

export default {
  title: 'Atoms/MagicButton',
  component: MagicButton,
  argTypes: {
    color: { control: 'color' },
    bgColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MagicButton {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  bgColor: 'red',
  color: 'white',
  children: 'Red button',
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  bgColor: 'blue',
  color: 'white',
  children: 'Blue button',
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  bgColor: 'green',
  color: 'white',
  children: 'Green button',
};
