import { deleteQuestionById } from '~/server/utils/data'
import type { Question } from '~/types'

export default defineEventHandler(async (event): Promise<Question[]> => {
  const id = getRouterParam(event, 'id')
  return deleteQuestionById(id as string)
})
