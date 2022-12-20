export default defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    return "از سیستم خارج شدید";
  }
});
