import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"
import colors from '../constant/colors'
const BackGroundGradient = () => {
  return (
    <LinearGradient colors={[colors.lightPurple,'transparent']} style={styles.background}
/>


    
  )
}

const styles = StyleSheet.create({
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 900,
      backgroundColor: colors.white,
    },
  });
  

export default BackGroundGradient