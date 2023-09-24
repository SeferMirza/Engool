import {Word, OnlyWord, Sentence} from '../types';
import Config from 'react-native-config';

const server = !__DEV__ ? 'Server' : 'Webhook';
//https://webhook.site/#!/21bd5e77-5f14-41ff-93aa-a8d91b56ac2a
const getWord = async () => {
  try {
    const pureInfo = await fetch(
      server === 'Webhook'
        ? 'https://webhook.site/21bd5e77-5f14-41ff-93aa-a8d91b56ac2a'
        : `${Config.SERVICE_LOCAL_URL}/words/info`,
    );
    const jsonFormatInfo = await pureInfo.json();

    var skipCount = Math.floor(Math.random() * (jsonFormatInfo - 0 + 1)) + 0;
    const response = await fetch(
      server === 'Webhook'
        ? 'https://webhook.site/21bd5e77-5f14-41ff-93aa-a8d91b56ac2a'
        : `${Config.SERVICE_LOCAL_URL}/words/all?take=1&skip=${skipCount}`,
    );
    const [json] = await response.json();

    if (json === undefined) {
      return null;
    }

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
    };

    return datas;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

const getWordBut = async (skipThese: Word[]) => {
  try {
    const response = await fetch(
      server === 'Webhook'
        ? 'https://webhook.site/21bd5e77-5f14-41ff-93aa-a8d91b56ac2a'
        : `${Config.SERVICE_LOCAL_URL}/words/single`,
      {
        body: JSON.stringify(skipThese),
      },
    );
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
//https://webhook.site/#!/455de0ce-8c67-4f23-8b0d-94834b51ebed/66c645ed-03a4-4e00-847b-4d6463002759/1
const getSentence = async () => {
  try {
    const response = await fetch(
      server === 'Webhook'
        ? 'https://webhook.site/455de0ce-8c67-4f23-8b0d-94834b51ebed'
        : `${Config.SERVICE_LOCAL_URL}/sentences/single`,
    );
    const json = await response.json();

    const datas: Sentence = {
      id: json.id,
      engSection: {
        engSentence: json.engText,
      },
      trSection: {
        trSentence: json.trText,
      },
    };
    return datas;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export {getWord, deleteWord, postWord, allWord, getSentence, getWordBut};
