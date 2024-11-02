<template>
  <div>
    <NuxtLayout
      title="New Question"
      :breadcrumbs="breadcrumbs"
    >
      <QuestionForm
        submit-text="Create"
        @submit="onSubmit"
      />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbLink } from '#ui/types'
import type { QuestionRequestDTO } from '~/types'

const onSubmit = async (questionRequestDTO: QuestionRequestDTO) => {
  await $fetch('/api/questions', {
    method: 'POST',
    body: questionRequestDTO,
  })

  useRouter().push({ name: 'questions' })
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
  { label: 'New' },
]
</script>
