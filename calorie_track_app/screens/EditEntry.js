import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import BackGroundGradient from "../components/BackGroundGradient";
import Card from "../components/Card";
import { collection, getFirestore } from "firebase/firestore";
import colors from "../constant/colors";
import PressableButton from "../components/PressableButton";
import { deleteFromDB, updateInDB } from "../firebase/firestore";
import { Feather,Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const EditEntry = ({ route }) => {
  const navigation = useNavigation();
  const limit = 500;
  const isOverLimit =
    route.params.entry.calories > limit && !route.params.entry.isReviewed;

  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this?", [
      {
        text: "No",
        onPress: () => console.log("Delete canceled"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          deleteFromDB(route.params.entry.id);
          navigation.goBack();
        },
      },
    ]);
  };
  const handleReview=()=>{
    Alert.alert("Imporant", "Are you sure you want to mark this as reviewd?", [
        {
          text: "No",
          onPress: () => console.log("Mark canceled"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            updateInDB(route.params.entry.id, { isReviewed: true });
            navigation.goBack();
          },
        },
      ]);

  }
  return (
    <View style={styles.container}>
      <BackGroundGradient />

      <Card style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.input}>
            Calories: {route.params.entry.calories}
          </Text>
          <Text style={styles.input}>
            Description: {route.params.entry.description}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PressableButton
            buttonPressed={handleDelete}
            customizedStyle={styles.button}
          >
            <Ionicons name="trash" size={20} color={colors.white} />
          </PressableButton>
          {isOverLimit && (
            <PressableButton
                customizedStyle={styles.button}
                buttonPressed={handleReview}
            >
                <Feather name="check" size={20} color={colors.white} />
            </PressableButton>
          )}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flex: 1,
    // marginTop: 100,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  cardContainer: {
    marginTop: 80,
    width: "80%",
    height: 180,
  },

  textContainer: {
    alignItems: "center",
  },

  input: {
    fontSize: 18,
    color: colors.purple,
    alignItems: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    padding: 30,
    marginLeft: 30,

    justifyContent: "space-between",
    width: "80%",
    flexDirection: "row",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 50,
  }, //add customized style
});

export default EditEntry;
