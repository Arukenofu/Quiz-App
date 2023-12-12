import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'
import router from "../router";

export const useQuestsStore = defineStore('counter', () => {
    const currentQuestId = ref(0);
    const increment = async () => {
        if (useQuestsStore().currentQuestId !== useQuestsStore().questsList.length-1) {
            useQuestsStore().currentQuestId++;
            useQuestsStore().userAnswer = 0;
            await router.push('/quest')
        }
        else
        {
            await router.push('/results')
            const music = new Audio('../public/results.mp3')
            await music.play();
        }
    }

    const correctAnswers = ref(0);
    const incrementCorrectAnswers = () => {
        useQuestsStore().correctAnswers++;
    }

    const questsList = ref(null)

    const userAnswer = ref(0)

    const currentQuest = computed(() => {
        if (questsList.value) {
            return useQuestsStore().questsList[useQuestsStore().currentQuestId]
        }
        return false;
    })

    return { currentQuest, currentQuestId, userAnswer, questsList, increment, correctAnswers, incrementCorrectAnswers}
})
