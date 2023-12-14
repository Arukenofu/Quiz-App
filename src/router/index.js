import {createRouter, createWebHistory} from "vue-router";
import QUEST from "../views/QUEST.vue";
import ANSWER from "../views/ANSWER.vue";
import RESULTS from "../views/RESULTS.vue";
import CONTACT from "../views/CONTACT.vue";
import SOCIAL from "../views/SOCIAL.vue";
import SELECT from "@/views/SELECTQUEST.vue";
import ACCOUNT from "@/views/ACCOUNT.vue";
import SETTINGS from "@/views/SETTINGS.vue";
import AUTH from "@/views/AUTH.vue";

const index = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: SELECT
    },
    {
      path: '/quest',
      name: 'quest',
      component: QUEST
    },
    {
      path: '/answer',
      name: 'answer',
      component: ANSWER,
    },
    {
      path: '/results',
      name: 'results',
      component: RESULTS
    },
    {
      path: '/contact',
      name: 'contact',
      component: CONTACT
    },
    {
      path: '/social',
      name: 'social',
      component: SOCIAL
    },
    {
      path: '/account',
      name: 'account',
      component: ACCOUNT
    },
    {
      path: '/settings',
      name: 'settings',
      component: SETTINGS
    },
    {
      path: '/auth',
      name: 'auth',
      component: AUTH
    }
  ]
})

export default index