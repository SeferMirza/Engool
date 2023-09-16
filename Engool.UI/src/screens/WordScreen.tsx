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
    buttonSection: {
      againButtonText: 'Tekrar',
      okayButtonText: 'Öğrendim',
    },
  });

  const word = async () => {
    try {
      setLoading(true);

      const datas: Word = await getWord();

      setData(datas);
      setNoConnection(false);
    } catch (error) {
      setNoConnection(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    word();
  }, []);

  function Again() {
    word();
  }

  function Next() {
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
            <View style={styles.trWord}>
              <Text style={layoutStyles.translationMeaningContentText}>
                {data.trSection.trWordText}
              </Text>
            </View>
            <View style={styles.trSentence}>
              <Text style={styles.trSentenceText}>
                {data.trSection.trSentenceText}
              </Text>
            </View>
          </View>
          <View style={styles.bottomButtoms}>
            <TouchableOpacity style={styles.againButton} onPressOut={Again}>
              <Text style={styles.buttonsText}>
                {data.buttonSection.againButtonText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.okayButton} onPressOut={Next}>
              <Text style={styles.buttonsText}>
                {data.buttonSection.okayButtonText}
              </Text>
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