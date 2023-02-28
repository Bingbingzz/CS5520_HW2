import { View, Text, StyleSheet, Alert } from "react-native";
import { firestore } from "../firebase/firebase_setup";
import React from "react";
import Lable from "./Lable";
import Input from "./Input";
import colors from "../constant/colors";
import { useState } from "react";
import PressableButton from "./PressableButton";
import { writeToDB } from "../firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import AllEntries from "../screens/AllEntries";
import { useNavigation } from '@react-navigation/native';

const AddEntryForm = () => {
  const navigation = useNavigation();
  const [caloriesText, setCaloriesText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [isValid, setIsValid] = useState(true);


  function changeCalories(enteredCalories) {
    setCaloriesText(enteredCalories);
    if (!isValid) {
      setIsValid(true);
    }
  }
  function changeDescription(enteredDscription) {
    setDescriptionText(enteredDscription);
    if (!isValid) {
      setIsValid(true);
    }
  }

  function handleReset() {
    setCaloriesText("");
    setDescriptionText("");
    setIsValid(true);
  }

  function checkCalories(text) {
    return !isNaN(text) && !text;
  }

  const handleSubmit = async () => {
    console.log(isValid);
    if (!caloriesText || !descriptionText || isNaN(caloriesText)) {
      Alert.alert("Invalid Input", "Please check your input.", [
        { text: "OK" },
      ]);
      return;
    }
    try {
        writeToDB({ calories: caloriesText, description: descriptionText});
      } catch (error) {
        console.log("error message");
      }
      navigation.goBack();
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.entryContainer}>
        <Lable>Calories</Lable>
        <Input style={styles.calories} sendChangedText={changeCalories} text={caloriesText}></Input>
      </View>
      <View style={styles.entryContainer}>
        <Lable>Description</Lable>
        <Input
          style={styles.description}
          sendChangedText={changeDescription}
          text={descriptionText}
        ></Input>
      </View>
      <View style={styles.buttonContainer}>
        <PressableButton
          buttonPressed={handleReset}
          customizedStyle={styles.button}
        >
          <Text style={styles.buttonText}>Rest</Text>
        </PressableButton>
        <PressableButton
          buttonPressed={handleSubmit}
          customizedStyle={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </PressableButton>
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
    justifyContent: "space-between",
    padding:10,
    marginHorizontal:30,
  },

  calories: {
    height: 200,
  }, //why this not work

  buttonContainer: {
    padding: 30,
    marginLeft: 60,
    justifyContent: "space-between",
    width: "80%",
    flexDirection: "row",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 90,
  }, //add customized style

  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  error: {
    color: "red",
    fontSize: 13,
  },
});

export default AddEntryForm;
