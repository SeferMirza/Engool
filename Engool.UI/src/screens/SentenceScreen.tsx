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
import {AgainButton, NextButton} from '../components/IconButtons';

// Types
import {Sentence} from '../types';

// Utils
import {getSentence} from '../utils/requests';
import DEFAULTS from '../utils/defaults';

// Styles
import LayoutStyles from '../styles/layout';
import ComponentStyles from '../styles/component';

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
    DEFAULTS.TRANSLATION_TEXT,
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
    setTranslationContent(DEFAULTS.TRANSLATION_TEXT);
  }

  function Next() {
    setIsHidden(true);
    sentence();
    setTranslationContent(DEFAULTS.TRANSLATION_TEXT);
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
            <View style={styles.engSentence}>
              <Text style={LayoutStyles.mainContentText}>
                {data.engSection.engSentence}
              </Text>
            </View>
          </View>
          <View style={LayoutStyles.translationMeaningContent}>
            <View style={styles.trSentence}>
              <TouchableOpacity
                style={{}}
                onPressOut={() => {
                  setIsHidden(!isHidden);
                  setTranslationContent(
                    isHidden
                      ? DEFAULTS.TRANSLATION_TEXT
                      : data.trSection.trSentence,
                  );
                }}>
                <Text style={LayoutStyles.translationMeaningContentText}>
                  {translationContent}
                </Text>
              </TouchableOpacity>
            </View>
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
  hidden: {
    color: '#FFFFFF',
  },
  engSentence: {},
  trSentence: {},
  bottomButtoms: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 0.5,
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
});

export default SentenceScreen;
