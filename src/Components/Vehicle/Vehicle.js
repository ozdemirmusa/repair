import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './Vehicle.style';

export default function Vehicle({vehicle, navigation}) {

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@vehicle', vehicle);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => {storeData(); navigation.navigate('Malfunctions')}}>
        <Text style={style.word}>{vehicle.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
}
