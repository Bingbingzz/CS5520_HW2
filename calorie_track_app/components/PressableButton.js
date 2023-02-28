import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import colors from "../constant/colors";

const PressableButton = ({
  buttonPressed,
  customizedStyle,
  pressedStyle,
  children,
}) => {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          styles.pressableDefault,
          customizedStyle,
          pressed && styles.pressedStyle,
        ];
      }}
      onPress={buttonPressed}
    >
      {children}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pressableDefault: { backgroundColor: colors.purple, borderRadius:5 },
  pressedStyle: {backgroundColor: colors.lightPurple, opacity: 0.6, borderRadius:5},
});

export default PressableButton;
