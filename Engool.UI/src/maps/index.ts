function DbResponseToWord(data: any) {
  return {
    id: data.id,
    engSection: {
      engWordText: data.engText,
      engSentenceText: data.engSentence,
    },
    trSection: {
      trWordText: data.trText,
      trSentenceText: data.trSentence,
    },
  };
}

function DbResponseToSentence(data: any) {
  return {
    id: data.id,
    engSection: {
      engSentence: data.engText,
    },
    trSection: {
      trSentence: data.trText,
    },
  };
}

export {DbResponseToWord, DbResponseToSentence};
