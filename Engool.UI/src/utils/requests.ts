import {Word, OnlyWord, Sentence} from '../types';
import {ServerResponseToSentence, ServerResponseToWord} from '../maps';
import Config from 'react-native-config';

const getWord = async () => {
  try {
    const pureInfo = await fetch(`${Config.SERVICE_LOCAL_URL}/words/info`);
    const jsonFormatInfo = await pureInfo.json();

    var skipCount = Math.floor(Math.random() * (jsonFormatInfo - 0 + 1)) + 0;
    const response = await fetch(
      `${Config.SERVICE_LOCAL_URL}/words/all?take=1&skip=${skipCount}`,
    );
    const [json] = await response.json();

    if (json === undefined) {
      return null;
    }

    const datas: Word = {
      id: json.id,
      engSection: {
        engWordText: json.engText,
      },
      trSection: {
        trWordText: json.trText,
      },
    };

    return datas;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

const getWordBut = async () => {
  try {
    const response = await fetch(`${Config.SERVICE_LOCAL_URL}/words/single`);
    const json = await response.json();
    const datas: Word = ServerResponseToWord(json);

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
      return ServerResponseToWord(j);
    });

    return datas;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

const getSentence = async () => {
  try {
    const response = await fetch(
      `${Config.SERVICE_LOCAL_URL}/sentences/single`,
    );
    const json = await response.json();
    const datas: Sentence = ServerResponseToSentence(json);

    return datas;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export {getWord, deleteWord, postWord, allWord, getSentence, getWordBut};
