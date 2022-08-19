import { defineStore } from "pinia";

export const useStore = defineStore('main', {
  state: () => ({
    loading: false,
    users: [],
    pages: null
  }),
  actions: {
    async getUsers(start) {
      this.loading = true;
      const repository = RepositoryFactory.get('users');
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