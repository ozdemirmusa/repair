import {View, TextInput, Button, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import MaskInput from 'react-native-mask-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './Meet.style';

export default function User({navigation}) {
  const {t} = useTranslation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [chassis, setChassis] = useState('');

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('@name');
      const surname = await AsyncStorage.getItem('@surname');
      const phone = await AsyncStorage.getItem('@phone');
      const chassis = await AsyncStorage.getItem('@chassis');
      if (name !== null) {
        setName(name);
        setSurname(surname);
        setPhone(phone);
        setChassis(chassis);
        console.log('var');
      }
    } catch (e) {
      console.log('yok');
    }
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@name', name);
      await AsyncStorage.setItem('@surname', surname);
      await AsyncStorage.setItem('@phone', phone);
      await AsyncStorage.setItem('@chassis', chassis);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        onChangeText={setName}
        value={name}
        placeholder={t('name')}
      />
      <TextInput
        style={style.input}
        onChangeText={setSurname}
        value={surname}
        placeholder={t('surname')}
      />
      <MaskInput
        style={style.input}
        value={phone}
        onChangeText={(masked, unmasked) => {
          setPhone(masked); // you can use the unmasked value as well

          // assuming you typed "9" all the way:
          console.log(masked); // (99) 99999-9999
          console.log(unmasked); // 99999999999
        }}
        mask={[
          '(',
          /\d/,
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
        ]}
      />
      <TextInput
        style={style.input}
        onChangeText={setChassis}
        value={chassis}
        placeholder={t('chassis_number')}
      />
      <View>
        <View style={style.input}>
          <Button
            title={t('next')}
            onPress={() => {
              console.log('ı,surname'+surname)
              if (name!=null && surname!=null) {
                storeData();
              navigation.navigate('Type');
              }
              else{
                ToastAndroid.show(t('toast'), ToastAndroid.LONG);
              }
              
            }}
          />
        </View>

        <View style={style.input}>
          <Button
            title={t('cancel')}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              })
            }
          />
        </View>
      </View>
    </View>
  );
}
