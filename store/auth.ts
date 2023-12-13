import axios from 'axios';
import { defineStore } from 'pinia';
import { useLocalStorage } from "@vueuse/core";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    user: null
  }),
  persist: true,
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      
      const { data, pending }: any = axios.post(useRuntimeConfig().public.apiUrl+'/auth/login', {
          username,
          password,
      }).then( (response) => {
        const token = useCookie('token');
        token.value = response.data.token;
        this.user = response.data;
        this.authenticated = true;
      })
      .catch(function (error) {
          console.log(error);
      });
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false;
      this.user = null;
      token.value = null;
    },
  },
});