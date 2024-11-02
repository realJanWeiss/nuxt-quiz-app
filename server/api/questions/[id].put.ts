import { updateQuestions } from '~/server/utils/data'
import type { Question, QuestionRequestDTO } from '~/types'

export default defineEventHandler(async (event): Promise<Question[]> => {
  const id = getRouterParam(event, 'id')
  const questionRequestDTO = await readBody<QuestionRequestDTO>(event)
  return updateQuestions({
    ...questionRequestDTO,
    id: id as string,
  })
})
