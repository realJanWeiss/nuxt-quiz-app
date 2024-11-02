<template>
    <div>
        <h1>Questions</h1>
    
        <NuxtLink to="/questions/new">New Question +</NuxtLink>
        <ul v-if="status === 'success'">
            <li v-for="question in questions" :key="question.id">
                <NuxtLink :to="{ name: 'questions-id', params: { id: question.id }}">
                    {{ question.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const { data: questions, status } = useFetch('/api/questions');
</script>