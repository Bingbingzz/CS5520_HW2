import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constant/colors";
import BackGroundGradient from "../components/BackGroundGradient";

const AddEntry = () => {
  return (
    <View>
      {/* <LinearGradient
        colors={[colors.lightPurple, "transparent"]}
        style={styles.container}
      > */}
      <BackGroundGradient />
      <Text>AddEntry</Text>
      {/* </LinearGradient> */}
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
