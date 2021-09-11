export interface IItem {
  id: number;
  email: string;
  first_name: string;
  avatar: string,
  item?: string,
  completed: boolean;
  todo?: string, 
  createdAt?: string
}

export interface IFilter {
  items: any,
  filter: string, 
  loader: boolean, 
  error: null
}