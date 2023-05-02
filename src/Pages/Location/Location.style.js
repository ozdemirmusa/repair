import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  explanation: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  address: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  information: {
    height: Dimensions.get('screen').height / 4,
    justifyContent: 'space-around',
  },
  map_button: {
    backgroundColor: '#bdc3c7',
  },
  map_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  map: {
    height: (Dimensions.get('screen').height / 4) * 3,
  },
});
