import React, { useState } from 'react';
import { Button,View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from "../../components/RoundedButton"
import {fontSizes, spacing   } from "../../utils/sizes"
import {colors  } from "../../utils/colors"

export const Focus = ({addSubject}) => {
  // <RoundedButton size={50} title="+" onPress={() =>{addSubject(tmpItem)}}/>
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>What would you tlike to focus on</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={{flex:1, marginRight: spacing.md}} onSubmitEditing={({nativeEvent}) => {
          setSubject(nativeEvent.text)
        }}/>
        <RoundedButton size={50} title="+" onPress={() =>{addSubject(subject)}}/>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
   innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "center"
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center"
  }
});