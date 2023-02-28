import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constant/colors";
import BackGroundGradient from "../components/BackGroundGradient";
import AddEntryForm from "../components/AddEntryForm";

const AddEntry = ({navigation}) => {
  return (
    <View>      
      <BackGroundGradient />
      <AddEntryForm/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  view: {
    width: "80%",
  },
});

export default AddEntry;
