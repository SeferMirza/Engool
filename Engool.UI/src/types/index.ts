type Word = {
  id: string;
  engSection: {
    engWordText: string;
    engSentenceText: string;
  };
  trSection: {
    trWordText: string;
    trSentenceText: string;
  };
};

type Sentence = {
  id: string;
  engSection: {
    engSentence: string;
  };
  trSection: {
    trSentence: string;
  };
};

type OnlyWord = {
  engText: string;
  engSentence: string;
  trText: string;
  trSentence: string;
};

type OnlySentence = {
  engSentence: string;
  trSentence: string;
};

type Key = {
  tr: string;
  eng: string;
};

export type {Word, Sentence, OnlyWord, OnlySentence, Key};
