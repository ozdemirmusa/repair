import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Vehicle from '../../../Components/Vehicle';
import style from './Type.style';

export default function Type({navigation}) {
  const {t} = useTranslation();
  return (
    <View style={style.container}>
      <View style={style.vehicle}>
        <ScrollView style={style.scrollView}>
          <Vehicle vehicle="DAF" navigation={navigation} />
          <Vehicle vehicle="Dorse" navigation={navigation}/>
          <Vehicle vehicle="FUSO" navigation={navigation}/>
          <Vehicle vehicle="Iveco" navigation={navigation}/>
          <Vehicle vehicle="Citroen" navigation={navigation}/>
          <Vehicle vehicle="MAN" navigation={navigation}/>
          <Vehicle vehicle="Mercedes-Benz" navigation={navigation}/>
          <Vehicle vehicle="Scania" navigation={navigation}/>
          <Vehicle vehicle="Volvo" navigation={navigation}/>
        </ScrollView>
      </View>
    </View>
  );
}
