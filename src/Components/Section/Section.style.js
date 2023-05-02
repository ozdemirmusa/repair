import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#4c5169',
    width: 300,
    height: 120,
    flexDirection: 'row',
    borderRadius: 25,
  },
  text_container: {
    justifyContent: 'center',
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
});
