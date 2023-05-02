import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
   alignItems:'center',
  },
  vehicle: {
    flexWrap: 'wrap',
    height:Dimensions.get('screen').height-200,
    alignItems:'center',
    justifyContent:'center',
  },
  
});
