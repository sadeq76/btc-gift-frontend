export default interface Comment {
  id: number;
  is_approved: boolean;
  text: string;
  date_created: string;
  user: {
    phone_number: string;
    full_name: string;
    is_admin: boolean;
    is_male: boolean;
    date_joined: string;
  };
}
