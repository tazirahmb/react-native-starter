import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    marginBottom: 24,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default styles;
