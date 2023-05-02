import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    width: Dimensions.get('screen').width-40, 
    justifyContent:'center',
    alignItems:'center',
    
  },
  button: {
    width:Dimensions.get('screen').width,
    height:100,
    backgroundColor:'#bdc3c7',
    justifyContent:'center',
    alignItems:'center'
  },
  word:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:'center',
    margin:20,
  }
  
});
