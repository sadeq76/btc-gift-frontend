export const translateKey = (key: string): string => {
  return key == "fullName"
    ? "نام کامل"
    : key == "type"
    ? "نوع کارت"
    : key == "message"
    ? "پیام تبریک"
    : key == "zipCode"
    ? "کدپستی"
    : key == "receiverName"
    ? "نام گیرنده"
    : key == "receiverPhone"
    ? "شماره گیرنده"
    : key == "address"
    ? "آدرس"
    : key == "status"
    ? "وضعیت"
    : key == "price"
    ? "قیمت"
    : "";
};

export const translateStatus = (status: string): string => {
  return status == "pending"
    ? "در انتظار پرداخت"
    : status == "prepareWallet"
    ? "ساخت کیف پول"
    : status == "increaseWallet"
    ? "واریز مبلغ"
    : status == "preparing"
    ? "آماده سازی"
    : status == "sending"
    ? "در حال ارسال"
    : status == "done"
    ? "اتمام سفارش"
    : "نامعلوم";
};

export const statusColor = (status: string): string => {
  return status == "pending"
    ? "error"
    : status == "prepareWallet" || status == "increaseWallet"
    ? "warn"
    : status == "preparing" || status == "sending"
    ? "info"
    : status == "done"
    ? "success"
    : "unknown";
};

export const translateCardTitle = (status: string): string => {
  return status == "black"
    ? "بلک کارت"
    : status == "diamond"
    ? "الماسی"
    : status == "gold"
    ? "طلایی"
    : status == "silver"
    ? "نقره ای"
    : status == "bronze"
    ? "برنزی"
    : "نامعلوم";
};
