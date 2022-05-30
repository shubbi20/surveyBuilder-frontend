import { atomWithStorage } from "jotai/utils";

export interface SurveyResponseInterface {
  QuestionType: string;
  Question: string;
  questionAns: string;
}

export const SurveyResponseAtom = atomWithStorage<SurveyResponseInterface[]>(
  "SurveyResponse",
  []
);
