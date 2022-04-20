import { ButtonRow } from './ButtonRow';

export default {
  title: 'Molecules/ButtonRow',
  component: ButtonRow,
};

const Template = (args) => <ButtonRow {...args} />;
export const Primary = Template.bind({});

Primary.storyName = 'Default usage';