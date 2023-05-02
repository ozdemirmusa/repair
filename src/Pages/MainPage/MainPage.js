import { View } from 'react-native';
import React from 'react';
import styles from './MainPage.style';
import Section from '../../Components/Section';
import User from '../Meet/Meet';

export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Section
        image="https://cdn-icons-png.flaticon.com/512/69/69769.png"
        pagename="Meet"
        nv={navigation}
      />
      <Section
        image="https://cdn-icons-png.flaticon.com/512/535/535188.png"
        pagename="Location"
        nv={navigation}
      />

      <Section
        image="https://cdn-icons-png.flaticon.com/512/1034/1034182.png"
        pagename="Phone"
        nv={navigation}
      />
    </View>
  );
}
