export default interface Order {
  id?: number;
  card: {
    id?: number;
    owner_phone_number: string;
    btc_amount: number;
    cost?: number;
    message: string;
    date_updated?: string;
    date_created?: string;
    card_id?: number;
  };
  state?: number;
  receiver_name: string;
  receiver_phone_number: string;
  date_updated?: string;
  date_created?: string;
  address_id: number;
}
