import axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase;
  axios.defaults.headers.common['Authorization'] = `Bearer 9|08sRedxRSYZyRGzNZKmzjdjmcNyUJ8HWPMJOCOdy`;

  return {
    provide: {

      // fetch data 
      fetchData: async (uri: string) => {
        try {
          const response = await axios.get(`${baseUrl}/${uri}` );
          return response.data;
        } catch (error: any) {
          return error.response.data; 
        }
      },

      // post data
      postData: async (uri: string, data: object) => {
        try {
          const response = await axios.post(`${baseUrl}/${uri}`, data );
          return response.data;
        } catch (error: any) {
          return error.response.data; 
        }
      },

      //update data
      updateData: async (uri: string, id: BigInteger, data: object ) => {
        try {
          const response = await axios.patch(`${baseUrl}/${uri}/${id}`, data );
          return response.data;
        } catch (error: any) {
          return error.response.data; 
        }
      },

      //delete data
      deleteData: async (uri: string, id: BigInteger) => {
        try {
          const response = await axios.delete(`${baseUrl}/${uri}/${id}` );
          return response.data;
        } catch (error: any) {
          return error.response.data; 
        }
      },

    },
  };
});

// usage
// const { $fetchData, $postData, $updateData, $deleteData } = useNuxtApp()