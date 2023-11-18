export interface Device {
  id: string;
  end_timestamp: number;
  isUsing: boolean;
  isPaying: boolean;
  user_id: string;
  seconds_payed: number;
}
