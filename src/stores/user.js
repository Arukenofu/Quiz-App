import {defineStore} from "pinia";
import {ref} from "vue";

export const useUser = defineStore('users', () => {
    const userData = ref([]);

    return {userData}
})