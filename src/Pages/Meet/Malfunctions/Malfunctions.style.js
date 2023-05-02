import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
   
    //flexWrap:'wrap',
  },
  sub_container: {
    flexDirection:'row',
    flexWrap:'wrap',
  },
  
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius:10,
    padding: 5,
    fontWeight:"bold",
    fontSize:18
  },
  word:{
    fontSize:18,
    fontWeight:"bold",
    textAlign:"center"
  },
  word_container:{
    marginTop:10,
    borderWidth:2,
    borderColor:'grey'
  }
});
