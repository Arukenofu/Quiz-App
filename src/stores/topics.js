import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const useTopics = defineStore('useTopicsStore', () => {

    const topics = reactive([
        {
            name: 'Философия',
            image: 'http://localhost:3000/images/philosophy.png'
        },
        {
            name: 'Математика',
            image: 'http://localhost:3000/images/math.png'
        },
        {
            name: 'Физика',
            image: 'http://localhost:3000/images/phyzics.png'
        },
        {
            name: 'География',
            image: 'http://localhost:3000/images/geography.png'
        },
        {
            name: 'Английский',
            image: 'http://localhost:3000/images/english.png'
        },
        {
            name: 'История',
            image: 'http://localhost:3000/images/history.png'
        }
    ])

    const topicID = ref(0);

    const selectedTopic = ref(null)

    const currentTopic = computed(() => {
        return topics[topicID.value];
    })

    return {
        topics, topicID, currentTopic, selectedTopic
    }

})