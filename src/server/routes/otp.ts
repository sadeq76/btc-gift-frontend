import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  if (event.req.method === "POST") {
    const body = await useBody(event);
    if (body == "1111") {
      return {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NzEzNDM3MTIuNTY3NDk5fQ._7O8DNVE6QtkvoCt2KFW1ZetFXS9lY8UKhdDjxYBNfE",
      };
    } else {
      return sendError(event, {
        statusCode: 404,
        statusMessage: "Bad Request",
        name: "Bad Request",
        message: "wrong code",
        data: { details: "کد ارسالی اشتباه است" },
      });
    }
  }
});
