import axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase;
  const headers = {
    headers: {
      Authorization: `Bearer 2|6eK0S0x3fuckeCY7ming6aaEaXJAmXhGMTMj6DrX`,
    },
  }
  return {
    provide: {

      // fetch all data with axios
      fetchData: async (uri: string) => {
        try {
          const response = await axios.get(`${baseUrl}/${uri}`, headers );
          return response.data;
        } catch (error: any) {
          return error.response.data; // Rethrow the error to be handled by the caller
        }
      },

      // fetch single data with axios
      postData: async (uri: string, data: object) => {
        try {
          const response = await axios.get(`${baseUrl}/${uri}`, data , headers );
          return response.data;
        } catch (error: any) {
          return error.response.data; // Rethrow the error to be handled by the caller
        }
      }

    },
  };
});