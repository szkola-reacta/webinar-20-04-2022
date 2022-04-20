import { Generator } from './Generator';

const Template = (args) => <Generator {...args} />;
export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

export default {
  title: 'Organisms/Generator',
  component: DefaultStory,
};