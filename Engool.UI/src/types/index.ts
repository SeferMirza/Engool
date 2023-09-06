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

type OnlyWord = {
  engText: string;
  engSentence: string;
  trText: string;
  trSentence: string;
};

export type {Word, OnlyWord};
