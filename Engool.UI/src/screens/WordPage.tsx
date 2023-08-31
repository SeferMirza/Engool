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
import {getWord} from '../utils/requests';

import NoConnection from '../components/NoConnection';
import TopBar from '../components/TopBar';
import Menus from '../components/Menus';

import {Word} from '../types';

function WordPage(): JSX.Element {
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
            <Menus />
          </TopBar>
          <View style={styles.engWordBox}>
            <View style={styles.engWord}>
              <Text style={styles.engWordText}>
                {data.engSection.engWordText}
              </Text>
            </View>
            <View style={styles.engSentence}>
              <Text style={styles.engSentenceText}>
                {data.engSection.engSentenceText}
              </Text>
            </View>
          </View>
          <View style={styles.trWordBox}>
            <View style={styles.trWord}>
              <Text style={styles.trWordText}>{data.trSection.trWordText}</Text>
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
  engWordBox: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  engSentence: {},
  engSentenceText: {
    fontSize: 18,
  },
  engWord: {},
  engWordText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  trWordBox: {
    flex: 3,
    borderTopWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trSentence: {},
  trSentenceText: {
    fontSize: 18,
  },
  trWord: {},
  trWordText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
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

export default WordPage;
