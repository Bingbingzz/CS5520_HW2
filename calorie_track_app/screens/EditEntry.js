import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import BackGroundGradient from "../components/BackGroundGradient";
import Card from "../components/Card";
import { collection, getFirestore } from "firebase/firestore";
import colors from "../constant/colors";
import PressableButton from "../components/PressableButton";
import { deleteFromDB, updateInDB} from "../firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

const EditEntry = ({ route }) => {
  const navigation = useNavigation();
  const { calories, description } = route.params.entry;
  const handleDelete= () => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this?",
      [
        {
          text: "No",
          onPress: () => console.log("Delete canceled"),
          style: "cancel"
        },
        { text: "OK", onPress: async () => {
          deleteFromDB(route.params.entry.id);
          navigation.goBack();
        } }
      ]
    );
 
  };
  return (
    <View style={styles.container}>
      <BackGroundGradient />

      <Card style={styles.cardContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.input}>Calories: {calories}</Text>
        <Text style={styles.input}>Description: {description}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <PressableButton 
            buttonPressed={handleDelete}
            customizedStyle={styles.button}>
                <Ionicons name="trash" size={26} color={colors.white} />
            </PressableButton>


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

  textContainer:{
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
    marginLeft: 60,
    
    justifyContent: "space-between",
    width: "80%",
    flexDirection: "row",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 60,
  }, //add customized style


});

export default EditEntry;
