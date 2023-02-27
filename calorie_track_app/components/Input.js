import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import colors from "../constant/colors";


const Input = ({sendChangedText,text}) => {
    function changeText(changedText){
        // setText(changedText);// save it in input
        sendChangedText(changedText);//send to starting
    }
  return (   
    <View style={styles.container}>
        <TextInput style={styles.input}
          multiline
          maxLength={200}
          numberOfLines={4}
          value={text}
          placeholder=""
          onChangeText={changeText}
        />     
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        
        backgroundColor: colors.lightPurple,
        alignItems: "center",
        justifyContent: "center",
    },

    input:{
        fontSize: 20,
        color: colors.purple,
        alignItems: 'center',
        borderBottomColor: colors.purple,
        borderRadius: 10,
        width: 200,
      }
})


export default Input