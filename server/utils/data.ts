import type { Question, QuestionRequestDTO } from '~/types'

const STORAGE_KEY = 'questions'

export const getQuestions = async (): Promise<Question[]> =>
  (await useStorage().getItem<Question[]>(STORAGE_KEY)) ?? []

export const findQuestionsById = async (id: string): Promise<Question> => {
  const questions = await getQuestions()
  const foundQuestion = questions.find(question => question.id === id)
  if (!foundQuestion) {
    throw createError({ statusCode: 404 })
  }
  return foundQuestion
}

export const deleteQuestionById = async (id: string): Promise<Question[]> => {
  const questions = await getQuestions()
  const foundIndex = questions.findIndex(question => question.id === id)

  if (foundIndex) throw createError({ statusCode: 404 })

  await useStorage().setItem(
    STORAGE_KEY,
    questions.toSpliced(foundIndex),
  )
  return questions
}

export const addQuestion = async (questionRequestDTO: QuestionRequestDTO) => {
  const newQuestion = {
    ...(questionRequestDTO),
    id: crypto.randomUUID(),
  }
  const currentQuestions = await getQuestions()
  const questions = (currentQuestions ?? []).concat(newQuestion)
  await useStorage().setItem<Question[]>('questions', questions)
  return questions
}

export const updateQuestions = async (updatedQuestion: Question): Promise<Question[]> => {
  const questions = await getQuestions()
  const foundIndex = questions.findIndex(question => question.id === updatedQuestion.id)

  if (foundIndex) throw createError({ statusCode: 404 })

  await useStorage().setItem(
    STORAGE_KEY,
    questions.toSpliced(foundIndex, 1, updatedQuestion),
  )
  return questions
}
