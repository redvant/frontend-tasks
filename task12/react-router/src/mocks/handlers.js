import { rest } from "msw";

export const posts = [
  {
    id: 1,
    userId: 1,
    title: "Test post title",
    body: "Test post body",
  },
  {
    id: 2,
    userId: 1,
    title: "Test post title 2",
    body: "Test post body 2",
  },
  {
    id: 3,
    userId: 2,
    title: "Test post title 3",
    body: "Test post body 3",
  },
];

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),
  rest.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
  rest.delete(
    "https://jsonplaceholder.typicode.com/posts/2",
    (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ errorMessage: "Error deleting post" })
      );
    }
  ),
  rest.post(
    "https://jsonplaceholder.typicode.com/posts",
    async (req, res, ctx) => {
      const request = await req.json();
      if (request.title === "Test error") {
        return res(
          ctx.status(403),
          ctx.json({ errorMessage: "Error creating the post" })
        );
      }
      return res(ctx.status(201), ctx.json({ ...req, id: 101 }));
    }
  ),
];
