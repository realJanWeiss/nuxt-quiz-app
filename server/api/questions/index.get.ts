import { getQuestions } from '~/server/utils/data'
import type { Question } from '~/types'

export default defineEventHandler(async (_event): Promise<Question[]> => {
  return getQuestions()
})
