import {StyleSheet} from 'react-native';

const LayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  mainContent: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContentText: {
    fontSize: 50,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  translationMeaningContent: {
    flex: 3,
    borderTopWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  translationMeaningContentText: {
    fontSize: 28,
    fontWeight: 'bold',
    flexShrink: 1,
  },
});

export default LayoutStyles;
