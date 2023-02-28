import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constant/colors'

export default function Card({children,style}) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  )
};

const styles=StyleSheet.create({
    card: {
        backgroundColor: colors.lavender, 
        borderRadius: 8,
        padding: 20,
        shadowColor: colors.purple,             
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 8,      
    }
})