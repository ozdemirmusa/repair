import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import style from './Fault.style'

export default function Fault({ fault }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={style.container}>
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        textStyle={style.word}
        unfillColor="#FFFFFF"
        fillColor="green"
        iconStyle={{ borderColor: "red" }}
        isChecked={toggleCheckBox}
        text={fault.toUpperCase()}
        disableBuiltInState
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
      />
    </View>
  )
}