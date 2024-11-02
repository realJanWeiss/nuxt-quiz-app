<template>
  <NuxtLayout
    title="Questions"
    :breadcrumbs="breadcrumbs"
  >
    <UButton
      class="mb-5"
      icon="i-heroicons-plus"
      to="/questions/new"
    >
      New Question
    </UButton>
    <ul v-if="status === 'success'">
      <li
        v-for="question in questions"
        :key="question.id"
        class="flex gap-1"
      >
        <div class="flex-grow">
          {{ question.title }}
        </div>
        <UButton
          :to="{ name: 'questions-id', params: { id: question.id } }"
          icon="i-heroicons-pencil"
          :aria-label="'edit: ' + question.title"
          variant="ghost"
        />
        <UButton
          icon="i-heroicons-trash"
          :aria-label="'delete: ' + question.title"
          variant="ghost"
          @click="deleteQuestion(question.id)"
        />
      </li>
    </ul>
    <div v-else>
      No questions yet
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { BreadcrumbLink } from '#ui/types'

const { data: questions, status, refresh } = useFetch('/api/questions')

const breadcrumbs: BreadcrumbLink[] = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: { name: 'index' },
  },
  {
    label: 'Questions',
  },
]

const deleteQuestion = async (id: string) => {
  await $fetch(`/api/questions/${id}`, { method: 'DELETE' })
  refresh()
}
</script>
