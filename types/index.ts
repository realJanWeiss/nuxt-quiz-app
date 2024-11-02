export interface Answer {
    text: string;
    correct: boolean;
}
export interface Question {
    id: string;
    title: string;
    answers: Answer[];
}

export type QuestionRequestDTO = Omit<Question, 'id'>;
