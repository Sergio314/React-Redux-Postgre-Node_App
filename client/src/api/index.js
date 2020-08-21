import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://localhost:3003'
});

export const readProducts = (offset) =>
    instance.get(`/cart?offset=${offset}`);



