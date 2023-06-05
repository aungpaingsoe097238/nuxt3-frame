import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const token = ref("");
  const user = ref({});

  const getToken = computed(() => token.value);

  const setToken = (tokenText) => {
    token.value = tokenText;
  };

  const setUser = (userData) => {
    user.value = userData;
  };

  return { token, getToken, setToken, setUser };
});

