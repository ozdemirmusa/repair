import { View, Text, Button, TextInput, ToastAndroid } from 'react-native';
import React from 'react';
import Fault from '../../../Components/Fault';
import { useTranslation } from 'react-i18next';
import style from './Malfunctions.style'

export default function Malfunctions({ navigation }) {
  const { t } = useTranslation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={style.container}>
      <View style={style.sub_container}>

        <Fault fault={t('fault1')} />
        <Fault fault={t('fault2')} />
        <Fault fault={t('fault3')} />
        <Fault fault={t('fault4')} />
        <Fault fault={t('fault5')} />
        <Fault fault={t('fault6')} />
      </View>

      <View style={style.word_container}>
        <Text style={style.word}>{t('word').toUpperCase()}</Text>
        <TextInput
          style={style.input}
          multiline={true}
          onChangeText={onChangeText}
          placeholder={t('placeholder').toUpperCase()}
          value={text}
        />
      </View>


      <View>
        <Button title={t('send').toUpperCase()} onPress={() => ToastAndroid.show('Alındı', ToastAndroid.LONG)} />
      </View>
    </View>
  );
}
