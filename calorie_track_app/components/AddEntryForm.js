import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import Lable from "./Lable";
import Input from "./Input";
import colors from "../constant/colors";
import { useState } from "react";

const AddEntryForm = () => {
  const [caloriesText, setCaloriesText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  function changeCalories(enteredCalories) {
    setCaloriesText(enteredCalories);
    // setCalories(enteredCalories);
  }
  function changeDescription(enteredDscription){
    setDescriptionText(enteredDscription);
    // setDescription(enteredDscription);
  }
  return (
    <View style={styles.formContainer}>
      <View style={styles.entryContainer}>
        <Lable>Calories</Lable>
        <Input sendChangedText={changeCalories} text={caloriesText}></Input>
      </View>
      <View style={styles.entryContainer}>
        <Lable>Description</Lable>
        <Input style={styles.description}  sendChangedText={changeDescription} text={descriptionText}></Input>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 80, 
  },
  entryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  description:{
    minHeight: 200,
  },
  buttonContainer:{
    padding:20,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  

});

export default AddEntryForm;
