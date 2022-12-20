const data = [
  {
    fullName: "آدولف هیتلر",
    type: "black",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "pending",
    price: 100000,
  },
  {
    fullName: "صدام حسین",
    type: "diamond",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "prepareWallet",
    price: 350000,
  },
  {
    fullName: "معمر قذافی",
    type: "gold",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "increaseWallet",
    price: 530200,
  },
  {
    fullName: "نیکلای چائوشسکو",
    type: "silver",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "preparing",
    price: 200450,
  },
  {
    fullName: "موسولینی ",
    type: "bronze",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "sending",
    price: 2300000,
  },
  {
    fullName: "نیکلای چائوشسکو",
    type: "gold",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "done",
    price: 100000,
  },
  {
    fullName: "آدولف هیتلر",
    type: "black",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "asd",
    price: 0,
  },
];

export default defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    return data;
  }
  if (event.req.method === "POST") {
  }
});
