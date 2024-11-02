<template>
    <div>
        <h1>New Question</h1>
    
        <QuestionForm @submit="onSubmit" />
    </div>
</template>

<script setup lang="ts">
import type { QuestionRequestDTO } from '~/types';


const onSubmit = async (questionRequestDTO: QuestionRequestDTO) => {
    await $fetch('/api/questions', {
        method: 'POST',
        body: questionRequestDTO
    });

    useRouter().push({ name: 'questions' })
};
</script>
