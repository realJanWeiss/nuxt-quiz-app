<template>
  <form
    class="max-w-lg flex flex-col gap-5"
    @submit.prevent="onSubmit"
  >
    <label>
      Title<br>
      <UInput
        v-model="title"
        type="text"
        required
      />
    </label>

    <div
      v-for="(answer, index) in answers"
      :key="index"
      class="flex items-end gap-5"
    >
      <label class="flex-grow">
        Answer {{ index + 1 }}<br>
        <UInput
          v-model="answer.text"
          type="text"
          required
        />
      </label>
      <UCheckbox
        v-model="answer.correct"
        class="py-1.5"
        label="Correct"
      />
      <UButton
        v-if="answers.length > 1"
        type="button"
        icon="i-heroicons-trash"
        :aria-label="'remove answer: ' + (index + 1)"
        variant="ghost"
        @click="deleteAnswer(index)"
      >
        Delete
      </UButton>
    </div>

    <UButton
      class="self-center"
      type="button"
      icon="i-heroicons-plus"
      variant="soft"
      @click="addAnswer"
    >
      Add answer
    </UButton>

    <UButton
      block
      @click="onSubmit"
    >
      {{ submitText }}
    </UButton>
  </form>
</template>

<script setup lang="ts">
import type { Answer, QuestionRequestDTO } from '~/types'

const props = defineProps<{
  submitText: string
  initialValue?: QuestionRequestDTO
}>()

const emits = defineEmits<{
  submit: [questionRequestDTO: QuestionRequestDTO]
}>()

const getEmptyAnswer = (): Answer =>
  ({ text: '', correct: false })

const title = ref<string>(props.initialValue?.title ?? '')
const answers = ref<Answer[]>(props.initialValue?.answers ?? [
  getEmptyAnswer(),
])

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
