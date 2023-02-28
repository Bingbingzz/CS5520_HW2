import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constant/colors";

const EntryItem = ({ entry, navigation, itemPressed }) => {
  const limit = 500;
  const isOverLimit = !entry.isReviewed && entry.calories > limit;

  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={({ pressed }) => {
          // general style first, customized style after
          return [styles.itemContainer, pressed && styles.pressedStyle];
        }}
        onPress={() => itemPressed(entry)}
        android_ripple={{ color: colors.white, borderless: false }}
      >
        <View style={styles.description}>
          <Text style={[styles.descriptionText]}>{entry.description}</Text>
          {isOverLimit && <Ionicons name="warning" size={25} color={colors.lightYellow}/>}
        </View>
        <Text style={[styles.calories]}>{entry.calories}</Text>
        {/* {console.log(entry.calories)} */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  calories: {
    flex: 1,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    backgroundColor: colors.white,
  },
  description: {
    flex: 3,
    padding: 10,
    alignSelf: "flex-end",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionText: {
    color: colors.white,
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 25,
  },
  itemContainer: {
    borderRadius: 8,
    backgroundColor: colors.purple,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
  },
  pressedStyle: {
    borderRadius: 8,
    opacity: 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteButton: {
    paddingHorizontal: 5,
    backgroundColor: "lightblue",
  },
});

export default EntryItem;
