import { rest } from 'msw';

import { apiConfig } from 'services/config';
import { Blog } from './Blog';

const Template = (args) => <Blog {...args} />;
export const DefaultStory = Template.bind({});

DefaultStory.parameters = {
  msw: [
    rest.get(apiConfig.postsList, (req, res, ctx) => {
      return res(
        ctx.json({
          records: [{
            id: 1,
            fields: {
              title: "Post 1",
              intro: "intro 1",
            },
          }, {
            id: 2,
            fields: {
              title: "Post 2",
              intro: "intro 2",
            },
          }]
        })
      )
    }),
  ],
}

DefaultStory.storyName = 'Default';

export const ErrorStory = Template.bind({});
ErrorStory.parameters = {
  msw: [
    rest.get(apiConfig.postsList, (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ records: []})
      )
    }),
  ],
}


export default {
  title: 'Organisms/Blog',
  component: DefaultStory,
};
