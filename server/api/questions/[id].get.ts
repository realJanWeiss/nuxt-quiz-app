import { findQuestionsById } from '~/server/utils/data'
import type { Question } from '~/types'

export default defineEventHandler((event): Promise<Question> => {
  const id = getRouterParam(event, 'id')
  return findQuestionsById(id as string)
})
