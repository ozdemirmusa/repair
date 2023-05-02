import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Title.style';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4413/4413295.png',
          }}
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>YILDIZ DİZEL OTOMOTİV</Text>
      </View>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4413/4413295.png',
          }}
        />
      </View>
    </View>
  );
}
