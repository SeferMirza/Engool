import AsyncStorage from '@react-native-async-storage/async-storage';
import {Word} from '../types';
// TODO - Return type of all functions must be set
const storeWord = async (word: Word) => {
  try {
    const jsonValue = JSON.stringify(word);
    await AsyncStorage.setItem(
      `${word.engSection.engWordText}-${word.trSection.trWordText}`,
      jsonValue,
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const getWordsFromStore = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const words = await AsyncStorage.multiGet(keys);
    if (words !== null) {
      return words;
    }
  } catch (e) {
    console.log(e);
  }
};

const getWordFromStore = async (word: Word) => {
  try {
    return await AsyncStorage.getItem(
      `${word.engSection.engWordText}-${word.trSection.trWordText}`,
    );
  } catch (e) {
    console.log(e);
  }
};

export {storeWord, getWordsFromStore, getWordFromStore};
