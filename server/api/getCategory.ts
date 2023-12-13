import axios from 'axios';

export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${id}`);
      return response.data;
     } catch (error) {
      console.log("error", error);
      return {};
     }
});