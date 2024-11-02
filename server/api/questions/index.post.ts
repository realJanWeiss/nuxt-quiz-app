import type { QuestionRequestDTO, Question } from "~/types";

export default defineEventHandler(async (event): Promise<Question[]> => {
    const newQuestion = {
        ...(await readBody<QuestionRequestDTO>(event)),
        id: crypto.randomUUID()
    }
    const currentQuestions = await useStorage().getItem<Question[]>('questions');
    const questions = (currentQuestions ?? []).concat(newQuestion)
    await useStorage().setItem<Question[]>('questions', questions);

    return questions;
});