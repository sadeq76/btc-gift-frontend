export default interface Login {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  is_male: boolean | null;
  birth_date: string | null;
  date_joined: string;
  last_login: string;
  access_token: string;
  refresh_token: string;
}
