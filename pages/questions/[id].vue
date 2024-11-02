<template>
  <NuxtLayout
    title="Question"
    :breadcrumbs="breadcrumbs"
  >
    <QuestionForm
      v-if="question"
      submit-text="Update"
      :initial-value="question"
      @submit="onSubmit"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { BreadcrumbLink } from '#ui/types'
import type { QuestionRequestDTO } from '~/types'

const { data: question } = await useFetch(
  `/api/questions/${useRoute().params.id}`,
)

if (!question.value) {
  throw createError({
    statusCode: 404,
  })
}

const breadcrumbs: BreadcrumbLink[] = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: { name: 'index' },
  },
  {
    label: 'Questions',
    to: { name: 'questions' },
  },
  { label: `${question.value.id.substring(0, 8)}...` },
]

const onSubmit = async (questionRequestDTO: QuestionRequestDTO) => {
  await $fetch(`/api/questions/${question.value!.id}`, {
    method: 'PUT',
    body: questionRequestDTO,
  })

  useRouter().push({ name: 'questions' })
}
</script>
