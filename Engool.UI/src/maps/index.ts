function ServerResponseToWord(data: any) {
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

function ServerResponseToSentence(data: any) {
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

export {ServerResponseToWord, ServerResponseToSentence};
