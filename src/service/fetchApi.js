import axios from 'axios';

axios.defaults.baseURL = 'https://reqres.in/api';
axios.defaults.params = {
  per_page: 1,
};

export const fetchGetTodo = () => {
  return axios.get('/users');
};

export const fetchAddItem = item => {
  return axios.post('/users', item);
};

export const fetchDeleteItem = item => {
  return axios.delete(`/users/${item.id}`);
};

export const fetchEditItem = (id, update) => {
  return axios.patch(`/users/${id}`, update);
};

export const fetchToggleItem = (id, update) => {
 return axios.patch(`/users/${id}`, update)
}
