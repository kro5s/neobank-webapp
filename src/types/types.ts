export interface Deposit {
  id: string;
  title: string;
  name: string;
  total: number;
  rate: number;
  duration: number;
  status: string;
  opened_date: string;
  closing_date: string;
  prolongation: boolean;
}

export interface Account {
  id: string;
  title: string;
  currency: string;
  balance: number;
  available: number;
  status: string;
  opened_date: string;
  closed_date?: string;
}