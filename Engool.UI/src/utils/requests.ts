import {Word, OnlyWord} from '../types';
import Config from 'react-native-config';

const getWord = async () => {
  try {
    const response = await fetch(`${Config.SERVICE_LOCAL_URL}/words/single`);
    const json = await response.json();

    const datas: Word = {
      id: json.id,
      engSection: {
        engWordText: json.engText,
        engSentenceText: json.engSentence,
      },
      trSection: {
        trWordText: json.trText,
        trSentenceText: json.trSentence,
      },
      buttonSection: {
        againButtonText: 'Tekrar',
        okayButtonText: 'Öğrendim',
      },
    };
    return datas;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

const deleteWord = async (id: string) => {
  try {
    await fetch(`${Config.SERVICE_LOCAL_URL}/words`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: id,
      }),
    });
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

const postWord = async (word: OnlyWord) => {
  try {
    await fetch(`${Config.SERVICE_LOCAL_URL}/words`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    });
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

const allWord = async () => {
  try {
    const response = await fetch(`${Config.SERVICE_LOCAL_URL}/words/all`);
    const json = await response.json();

    const datas: Word[] = json.map((j: any) => {
      return {
        id: j.id,
        engSection: {
          engWordText: j.engText,
          engSentenceText: j.engSentence,
        },
        trSection: {
          trWordText: j.trText,
          trSentenceText: j.trSentence,
        },
        buttonSection: {
          againButtonText: 'Tekrar',
          okayButtonText: 'Öğrendim',
        },
      };
    });
    return datas;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export {getWord, deleteWord, postWord, allWord};
