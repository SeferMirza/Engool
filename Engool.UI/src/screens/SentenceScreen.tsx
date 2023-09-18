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

import {getSentence} from '../utils/requests';

import {Sentence} from '../types';

function SentenceScreen({navigation}: any): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [noConnection, setNoConnection] = useState(false);
  const [data, setData] = useState<Sentence>({
    id: '',
    engSection: {
      engSentence: '',
    },
    trSection: {
      trSentence: '',
    },
  });
  const [isHidden, setIsHidden] = useState(true);
  const [translationContent, setTranslationContent] = useState(
    'Türkçesini görmek için tıklayın!',
  );

  const sentence = async () => {
    try {
      setLoading(true);

      const datas: Sentence = await getSentence();

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
    setIsHidden(true);
    sentence();
  }, []);

  function Again() {
    setIsHidden(true);
    sentence();
  }

  function Next() {
    setIsHidden(true);
    sentence();
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
            <View style={styles.engSentence}>
              <Text style={layoutStyles.mainContentText}>
                {data.engSection.engSentence}
              </Text>
            </View>
          </View>
          <View style={layoutStyles.translationMeaningContent}>
            <View style={styles.trSentence}>
              <TouchableOpacity
                style={{}}
                onPressOut={() => {
                  setIsHidden(!isHidden);
                  setTranslationContent(
                    isHidden
                      ? 'Türkçesini görmek için tıklayın!'
                      : data.trSection.trSentence,
                  );
                }}>
                <Text style={layoutStyles.translationMeaningContentText}>
                  {translationContent}
                </Text>
              </TouchableOpacity>
            </View>
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
  engWordBox: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hidden: {
    color: '#FFFFFF',
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

export default SentenceScreen;
