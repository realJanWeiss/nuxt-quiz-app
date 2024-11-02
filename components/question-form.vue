<template>
    <form @submit.prevent="onSubmit">
        <label>
            Title<br>
            <input v-model="title" type="text" required>
        </label>

        <div v-for="(answer, index) in answers" :key="index">
            <label>
                Answer {{ index + 1 }}<br>
                <input v-model="answer.text" type="text" required>
            </label>
            <label>
                <input v-model="answer.correct" type="checkbox">
                Correct
            </label>
            <button type="button" @click="deleteAnswer(index)">Delete</button>
        </div>

        <div>
            <button type="button" @click="addAnswer">Add answer</button>
        </div>
    
        <br>

        <button>Create</button>
    </form>
</template>

<script setup lang="ts">
import type { Answer, QuestionRequestDTO } from '~/types';

const props = defineProps<{
    initialValue?: QuestionRequestDTO;
}>();

const emits = defineEmits<{
    submit: [questionRequestDTO: QuestionRequestDTO];
}>();

const getEmptyAnswer = (): Answer =>
    ({ text: '', correct: false });

const title = ref<string>(props.initialValue?.title ?? '');
const answers = ref<Answer[]>(props.initialValue?.answers ?? [
    getEmptyAnswer()
]);

const addAnswer = () => {
    answers.value.push(getEmptyAnswer())
}
const deleteAnswer = (index: number) => {
    answers.value.splice(index, 1)
}
const onSubmit = () => {
    emits('submit', { title: title.value, answers: answers.value })
}
</script>