import axios from 'axios';

const STRAPI_URL = 'http://localhost:1337/api';


export const getDocuments = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/docs?populate=*');
    return response.data.data;
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error.message);
    return [];
  }
};