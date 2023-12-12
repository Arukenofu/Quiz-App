import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const useTopics = defineStore('useTopicsStore', () => {

    const topics = reactive([
        {
            name: 'Философия',
            image: '../public/topics/philosophy.png'
        },
        {
            name: 'Математика',
            image: '../public/topics/math.png'
        },
        {
            name: 'Физика',
            image: '../public/topics/phyzics.png'
        },
        {
            name: 'География',
            image: '../public/topics/geography.png'
        },
        {
            name: 'Английский',
            image: '../public/topics/english.png'
        },
        {
            name: 'История',
            image: '../public/topics/history.png'
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