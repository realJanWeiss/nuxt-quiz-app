import type { Question } from "~/types";

export default defineEventHandler(async (_event): Promise<Question[]> => {
    return (await useStorage().getItem<Question[]>('questions')) ?? []
});