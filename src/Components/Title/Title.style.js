import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 30,
    justifyContent: 'space-around',
    backgroundColor: '#a39b7e',
  },
  text_container: {
    width: Dimensions.get('screen').width - 130,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  image_container: {
    width: 50,
  },
  image: {
    width: 50,
    height: 50,
  },
});
