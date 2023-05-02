import {
  View,
  Text,
  Button,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import style from './Phone.style';
import {useTranslation} from 'react-i18next';

export default function Phone() {
  const {t} = useTranslation();

  return (
    <View style={style.container}>
      <View>
        <Text style={style.explanation}>{t('explanation')}</Text>
      </View>

      <View style={style.area}>
        <TouchableOpacity
          style={style.area}
          onPress={() => Linking.openURL('tel:+905555555555}')}>
          <Text style={style.word}>{t('phone')}</Text>
          <Image
            style={style.img}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/552/552489.png',
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={style.area}>
        <TouchableOpacity
          style={style.area}
          onPress={() =>
            Linking.openURL('whatsapp://send?phone=+905555555555')
          }>
          <Text style={style.word}>{t('wp')}</Text>
          <Image
            style={style.img}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
