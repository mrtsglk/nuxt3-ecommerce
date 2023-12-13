import axios from 'axios';

export default defineEventHandler(async (event) => {
  try {
    const response = await axios.get(useRuntimeConfig().public.apiUrl+'/products/categories');
    return response.data;
  } catch (error) {
    console.log("error", error);

    return {
      products: [],
    };
  }
});