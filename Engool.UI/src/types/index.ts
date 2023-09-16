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
  buttonSection: {
    againButtonText: string;
    okayButtonText: string;
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

export type {Word, Sentence, OnlyWord, OnlySentence};
