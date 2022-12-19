import { defineStore } from "pinia";
import api from '../services/api'

export const useStore = defineStore('main', {
  state: () => ({
    loading: false,
    users: [],
    pages: null
  }),
  actions: {
    async getUsers(start) {
      this.loading = true;
      const response = api.get('users');
      try {
        this.users = await repository.get(start)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
})