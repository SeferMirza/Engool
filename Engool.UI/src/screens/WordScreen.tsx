import React, {useEffect, useState, useCallback} from 'react';
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
import {AgainButton, NextButton} from '../components/IconButtons';

// Utils
import {getWord} from '../utils/requests';
import {getWordFromStore, storeWord} from '../utils/asyncStore';
import DEFAULTS from '../utils/defaults';

// Types
import {Word} from '../types';

// Styles
import LayoutStyles from '../styles/layout';
import ComponentStyles from '../styles/component';

function WordScreen({navigation}: any): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [noConnection, setNoConnection] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [translationWordContent, setTranslationWordContent] = useState(
    DEFAULTS.TRANSLATION_TEXT,
  );
  const [data, setData] = useState<Word>({
    id: '',
    engSection: {
      engWordText: '',
    },
    trSection: {
      trWordText: '',
    },
  });
  const word = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    word();
  }, [word]);

  function Again() {
    word();
    setIsHidden(true);
    setTranslationWordContent(DEFAULTS.TRANSLATION_TEXT);
  }

  async function Next() {
    await storeWord(data);
    word();
    setTranslationWordContent(DEFAULTS.TRANSLATION_TEXT);
  }

  return (
    <View style={LayoutStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : noConnection && !__DEV__ ? (
        <NoConnection />
      ) : (
        <View style={LayoutStyles.column}>
          <TopBar>
            <Menus navigation={navigation} />
          </TopBar>
          <View style={LayoutStyles.mainContent}>
            <View style={styles.engWord}>
              <Text style={LayoutStyles.mainContentText}>
                {data.engSection.engWordText}
              </Text>
            </View>
          </View>
          <View style={LayoutStyles.translationMeaningContent}>
            <TouchableOpacity
              style={LayoutStyles.translationMeaningContent}
              onPressOut={() => {
                setIsHidden(!isHidden);
                setTranslationWordContent(
                  isHidden
                    ? DEFAULTS.TRANSLATION_TEXT
                    : data.trSection.trWordText,
                );
              }}>
              <View style={styles.trWord}>
                <Text style={LayoutStyles.translationMeaningContentText}>
                  {translationWordContent}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomButtoms}>
            <AgainButton
              style={ComponentStyles.againButton}
              onPressOut={Again}
            />
            <NextButton style={ComponentStyles.okayButton} onPressOut={Next} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  engWord: {},
  trWord: {},
  bottomButtoms: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 0.5,
  },
});

export default WordScreen;
