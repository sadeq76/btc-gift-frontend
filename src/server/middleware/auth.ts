export default defineEventHandler((event) => {
  if (event.req.url === "/order") {
    if (
      event.req.headers.authorization ==
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NzEzNDM3MTIuNTY3NDk5fQ._7O8DNVE6QtkvoCt2KFW1ZetFXS9lY8UKhdDjxYBNfE"
    ) {
      return;
    } else {
      return sendError(event, {
        statusCode: 401,
        statusMessage: "Unauthorized",
        name: "Unauthorized",
        message: "token expired",
        data: { details: "توکن شما منقضی شده است" },
      });
    }
  }
});
