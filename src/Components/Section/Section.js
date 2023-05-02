import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Section.style';

export default function Section({ image, pagename, nv }) {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        nv.navigate(pagename)
      }}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>{t(pagename.toLowerCase()).toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
}
