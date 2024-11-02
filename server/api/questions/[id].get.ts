import type { Question } from "~/types";

export default defineEventHandler(async (event): Promise<Question> => {
    const id = getRouterParam(event, 'id')
    const questions = await useStorage().getItem<Question[]>('questions');
    const foundQuestion = questions?.find(question => question.id === id);
    if (!foundQuestion) {
        throw createError({ statusCode: 404 })
    }
    return foundQuestion;
});