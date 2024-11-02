<template>
    <div>
        <h1>Question</h1>
        id: {{ $route.params.id }}

        <QuestionForm v-if="question" :initial-value="question" />
    </div>
</template>

<script setup lang="ts">
const { data: question } = await useFetch(
    `/api/questions/${useRoute().params.id}`
);

if (!question.value) {
  throw createError({
    statusCode: 404
  });
}
</script>