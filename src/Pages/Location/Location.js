import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import React from 'react';
import openMap, {createOpenLink} from 'react-native-open-maps';
import {useTranslation} from 'react-i18next';
import style from './Location.style';

export default function Location() {
  const {t} = useTranslation();
  return (
    <View style={style.container}>
      <View style={style.information}>
        <Text style={style.explanation}>{t('address')}</Text>
        <Text style={style.address}>
          Adapazarı Bolu Yolu No:4 İhsaniye Köyü/Düzce Merkez/Düzce
        </Text>
        <TouchableOpacity
          style={style.map_button}
          onPress={() => {
            const latitude = '40.849427';
            const longitude = '31.095972 ';
            const label =
              'Yildiz Dizel Otomotiv, Merkez, Adapazarı Bolu Yolu No:4,81100 İhsaniye Köyü/Düzce Merkez/Düzce, 81000 Düzce';

            const url = Platform.select({
              ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
              android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
            });

            Linking.canOpenURL(url).then(supported => {
              if (supported) {
                return Linking.openURL(url);
              } else {
                const browser_url =
                  'https://www.google.de/maps/@' +
                  latitude +
                  ',' +
                  longitude +
                  '?q=' +
                  label;
                return Linking.openURL(browser_url);
              }
            });
          }}>
          <Text style={style.map_text}>Click To Open Maps 🗺</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
