import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

import {postWord} from '../../utils/requests';

const NewWord = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [engW, onChangeEngW] = React.useState('');
  const [trW, onChangeTrW] = React.useState('');
  const [engS, onChangeEngS] = React.useState('');
  const [trS, onChangeTrS] = React.useState('');

  function ClearTextInputs() {
    onChangeEngW('');
    onChangeTrW('');
    onChangeEngS('');
    onChangeTrS('');
  }

  async function onClickAdd() {
    try {
      postWord({
        engText: engW,
        trText: trW,
        engSentence: engS,
        trSentence: trS,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={modalStyle.modalContainer}>
          <View style={styles.modalView}>
            <View style={layoutStyle.row}>
              <Text style={[styles.textBlock, styles.modalText]}>English:</Text>
              <TextInput
                style={[styles.inputBlock, textInputStyle.smoothTextInput]}
                onChangeText={onChangeEngW}
                value={engW}
              />
            </View>
            <View style={layoutStyle.row}>
              <Text style={[styles.textBlock, styles.modalText]}>Turkish:</Text>
              <TextInput
                style={[styles.inputBlock, textInputStyle.smoothTextInput]}
                onChangeText={onChangeTrW}
                value={trW}
              />
            </View>
            <View style={layoutStyle.row}>
              <Text style={[styles.textBlock, styles.modalText]}>
                English Sentence:
              </Text>
              <TextInput
                multiline
                style={[
                  styles.inputBlock,
                  textInputStyle.noRestrictionsSmoothTextInput,
                ]}
                onChangeText={onChangeEngS}
                value={engS}
              />
            </View>
            <View style={layoutStyle.row}>
              <Text style={[styles.textBlock, styles.modalText]}>
                Turkish Sentence:
              </Text>
              <TextInput
                multiline
                style={[
                  styles.inputBlock,
                  textInputStyle.noRestrictionsSmoothTextInput,
                ]}
                onChangeText={onChangeTrS}
                value={trS}
              />
            </View>
            <View style={[layoutStyle.row, styles.buttonsBlock]}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(false);
                  ClearTextInputs();
                }}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  setModalVisible(false);
                  onClickAdd();
                  ClearTextInputs();
                }}>
                <Text style={styles.textStyle}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add Word</Text>
      </TouchableOpacity>
    </View>
  );
};

const width = Dimensions.get('window').width;

const modalStyle = require('../../styles/modal');
const layoutStyle = require('../../styles/layout');
const textInputStyle = require('../../styles/textInput');
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBlock: {
    flex: 2,
  },
  textBlock: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: width / 4,
  },
  buttonsBlock: {
    marginTop: 10,
    justifyContent: 'space-between',
    width: width / 1.3,
    height: 60,
    paddingHorizontal: 10,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#FAFAFA',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default NewWord;
