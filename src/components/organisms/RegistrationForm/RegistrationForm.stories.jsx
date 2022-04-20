import { RegistrationForm } from './RegistrationForm';

const Template = (args) => <RegistrationForm {...args} />;
export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

export default {
  title: 'Organisms/RegistrationForm',
  component: DefaultStory,
};