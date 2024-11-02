import { addQuestion } from '~/server/utils/data'
import type { QuestionRequestDTO, Question } from '~/types'

export default defineEventHandler(async (event): Promise<Question[]> => {
  const questionRequestDTO = await readBody<QuestionRequestDTO>(event)
  const questions = addQuestion(questionRequestDTO)
  return questions
})
