import {
  Atom,
  atom,
  SetStateAction,
  useAtom,
  useAtomValue,
  WritableAtom,
} from "jotai";
import { atomWithStorage, RESET, selectAtom } from "jotai/utils";
import { useMemo } from "react";

export const rightDivWidthAtom = atomWithStorage("rightDivWidth", 530);

export interface Selectiontypeinterface {
  QuestionType: string;
  Question: string;
  desc: string;
  choices?: [string];
}

export const selectionQuestionAtom = atomWithStorage<Selectiontypeinterface[]>(
  "atomarr",
  []
);

export const indexElementPreviewAtom = atomWithStorage<unknown>(
  "indexElementPreview",
  undefined
);

export const updateIndexPrevElementAtom = atom(
  (get) => get(indexElementPreviewAtom),
  (get, set, value: number) => {
    set(indexElementPreviewAtom, value);
  }
);
export const checkAtom = atom(false);

export const toggleCheckAtom = atom(
  (get) => get(checkAtom),
  (get, set, value: boolean) => {
    set(checkAtom, value);
  }
);

export const addSelectionQuestionAtom = atom(
  (get) => get(selectionQuestionAtom),
  (get, set, value: Selectiontypeinterface) => {
    set(selectionQuestionAtom, (prev) => [...prev, value]);
  }
);

export const updateSelectionQuestiontextAtom = atom(
  null,
  (
    get: any,
    set: any,
    {
      queText,
      trackQuestionIndex,
    }: { queText: string; trackQuestionIndex: number }
  ) => {
    set(
      selectionQuestionAtom,
      updateQuestion(get(selectionQuestionAtom), trackQuestionIndex, queText)
    );
  }
);

const updateQuestion = (
  selectquestion: Selectiontypeinterface[],
  trackQuestionIndex: number,
  quetext: string
) => {
  selectquestion.map((ques, ind) => ({
    ...ques,
    Question: ind === trackQuestionIndex ? quetext : ques.Question,
  }));
};

// export const useAttributeAtom = ({
//   selectionQuestionAtom,
//   trackQuestionIndex,
// }: {
//   selectionQuestionAtom: WritableAtom<
//     Selectiontypeinterface[],
//     typeof RESET | SetStateAction<Selectiontypeinterface[]>,
//     void
//   >;
//   trackQuestionIndex: number;
// }) => {
//   return useMemo(() => {
//     return focusAtom(
//       selectionQuestionAtom,
//       (optic: any) => optic.at(trackQuestionIndex).Question,
//     );
//   }, [selectionQuestionAtom, trackQuestionIndex]);
// };

export const selectionEleAtSpecificIndexAtom = (index: any) => {
  const anAtom = useMemo(
    () => atom((get) => get(selectionQuestionAtom)[index]),
    [index]
  );
  return anAtom;
};

export const updateSelectionQuestionTextAtom = atom(
  null,
  (
    get,
    set,
    {
      trackQuestionIndex,
      queText,
    }: { trackQuestionIndex: number; queText: string }
  ) => {
    const prev = get(selectionQuestionAtom);
    const index = trackQuestionIndex;
    const QueText = queText;
    set(
      selectionQuestionAtom,
      prev.map((ele, i) => (i === index ? { ...ele, Question: QueText } : ele))
    );
  }
);

export const updateSelectionDescTextAtom = atom(
  null,
  (
    get,
    set,
    {
      trackQuestionIndex,
      descText,
    }: { trackQuestionIndex: number; descText: string }
  ) => {
    const prev = get(selectionQuestionAtom);
    const index = trackQuestionIndex;
    const DescText = descText;
    set(
      selectionQuestionAtom,
      prev.map((ele, i) => (i === index ? { ...ele, desc: DescText } : ele))
    );
  }
);
