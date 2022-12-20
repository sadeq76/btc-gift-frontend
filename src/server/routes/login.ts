export default defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    // return blogs list;
  }
  if (event.req.method === "POST") {
    const body = await useBody(event);
    return `کد به شماره تماس   ${body}  ارسال شد`;
  }
});
