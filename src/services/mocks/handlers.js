import { rest } from 'msw'
import { apiConfig } from '../config';

export const handlers = [
  // rest.post('/login', (req, res, ctx) => {
  //   const { username } = req.body

  //   return res(
  //     ctx.status(404),
  //     ctx.delay(2000),
  //     ctx.json({
  //       id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //       username,
  //       firstName: 'John',
  //       lastName: 'Maverick',
  //     })
  //   )
  // }),
  // // apiConfig.postsList /posts

  // rest.post(apiConfig.postsList, (req, res, ctx) => {
  //   const { body } = req;
  //   return res(
  //     ctx.status(201),
  //     ctx.json({}),
  //   )
  // }),

  rest.get(apiConfig.postsList, (req, res, ctx) => {
    // req.params.case1 then
    // return ()

    // default:

    return res(
      ctx.status(200),
      ctx.json({
        records: [{
          id: 1,
          fields: {
            title: "Post 1",
            intro: "intro 1",
          },
        }, {
          id: 3,
          fields: {
            title: "Post 3",
            intro: "intro 3",
          },
        }]
      }),
    );
  }),

  rest.get('/tickets', (req, res, ctx) => {
    return res(
      ctx.json(
        [
          {id: 1, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
          {id: 2, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
          {id: 3, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
        ]
      )
    );
  })
]