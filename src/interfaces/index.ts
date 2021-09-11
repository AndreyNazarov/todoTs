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

export interface ITodoState {
  items: IItem[],
  filter: string, 
  loader: boolean, 
  error: null
}

export interface IState{
  todo: ITodoState
}