/*
array boş gelince bumluyor o düzeltilecek
*/

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import NoConnection from '../components/NoConnection';
import TopBar from '../components/TopBar';
import Menus from '../components/Menus';

import {getWord} from '../utils/requests';
import {getWordFromStore, storeWord} from '../utils/asyncStore';

import {Word} from '../types';

function WordScreen({navigation}: any): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [noConnection, setNoConnection] = useState(false);
  const [data, setData] = useState<Word>({
    id: '',
    engSection: {
      engWordText: '',
      engSentenceText: '',
    },
    trSection: {
      trWordText: '',
      trSentenceText: '',
    },
  });
  const [isHidden, setIsHidden] = useState(true);
  const [translationWordContent, setTranslationWordContent] = useState(
    'Türkçesini görmek için tıklayın!',
  );
  const [translationSentenceContent, setTranslationSentenceContent] =
    useState('');

  const word = async () => {
    try {
      setLoading(true);

      let datas: Word | null = await getWord();

      if (datas === null) {
        return;
      }

      if ((await getWordFromStore(datas!)) !== null) {
        word();
      } else {
        setData(datas);
        setNoConnection(false);
      }
    } catch (error) {
      setNoConnection(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    word();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function Again() {
    word();
  }

  async function Next() {
    await storeWord(data);
    word();
  }

  return (
    <View style={layoutStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : noConnection && !__DEV__ ? (
        <NoConnection />
      ) : (
        <View style={layoutStyles.column}>
          <TopBar>
            <Menus navigation={navigation} />
          </TopBar>
          <View style={layoutStyles.mainContent}>
            <View style={styles.engWord}>
              <Text style={layoutStyles.mainContentText}>
                {data.engSection.engWordText}
              </Text>
            </View>
            <View style={styles.engSentence}>
              <Text style={styles.engSentenceText}>
                {data.engSection.engSentenceText}
              </Text>
            </View>
          </View>
          <View style={layoutStyles.translationMeaningContent}>
            <TouchableOpacity
              style={layoutStyles.translationMeaningContent}
              onPressOut={() => {
                setIsHidden(!isHidden);
                setTranslationWordContent(
                  isHidden
                    ? 'Türkçesini görmek için tıklayın!'
                    : data.trSection.trWordText,
                );
                setTranslationSentenceContent(
                  isHidden ? '' : data.trSection.trSentenceText,
                );
              }}>
              <View style={styles.trWord}>
                <Text style={layoutStyles.translationMeaningContentText}>
                  {translationWordContent}
                </Text>
              </View>
              <View style={styles.trSentence}>
                <Text style={styles.trSentenceText}>
                  {translationSentenceContent}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomButtoms}>
            <TouchableOpacity style={styles.againButton} onPressOut={Again}>
              <Text style={styles.buttonsText}>Tekrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.okayButton} onPressOut={Next}>
              <Text style={styles.buttonsText}>Öğrendim</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const layoutStyles = require('../styles/layout');
const styles = StyleSheet.create({
  engSentence: {},
  engSentenceText: {
    fontSize: 18,
  },
  engWord: {},
  trSentence: {},
  trSentenceText: {
    fontSize: 18,
  },
  trWord: {},
  bottomButtoms: {
    flex: 1,
    flexDirection: 'row',
  },
  againButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  okayButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'green',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WordScreen;
