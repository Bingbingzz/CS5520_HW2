import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../constant/colors";
import { LinearGradient } from "expo-linear-gradient";
import BackGroundGradient from "../components/BackGroundGradient";

const AllEntries = () => {
  return (
    <View>
      <BackGroundGradient />
      <Text>AllEntries</Text>
    </View>
  );
};


export default AllEntries;
