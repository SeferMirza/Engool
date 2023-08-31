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

export type {Word};
