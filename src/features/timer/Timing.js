import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
  
  return (
    <>
    <View style={styles.timingButton}>
      <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)}/>
    </View>
    <View style={styles.timingButton}>
      <RoundedButton title="15" size={75} onPress={() => onChangeTime(15)}/>
    </View>
    <View style={styles.timingButton}>
      <RoundedButton title="20" size={75} onPress={() => onChangeTime(20)}/>
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  },
});
