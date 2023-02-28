import React from "react";
import colors from "../constant/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import { collection, onSnapshot, deleteDoc } from "firebase/firestore";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import Input from "../components/Input";
import EntryItem from "../components/EntryItem";
import BackGroundGradient from "../components/BackGroundGradient";
import { firestore } from "../firebase/firebase_setup";
import EditEntry from "./EditEntry";
import { useNavigation } from '@react-navigation/native';

const AllEntries = ({entry, navigation, itemPressed}) => {
    const [entries, setEntries] = useState([]);
    // const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onSnapshot(
          collection(firestore, "calories"),
          (querySnapshot) => {
            if (querySnapshot.empty) {
              setEntries([]);
            } else {
              let entriesFromDB = [];
              querySnapshot.docs.forEach((snapDoc) => {
                entriesFromDB.push({ ...snapDoc.data(), id: snapDoc.id });
              });
              console.log(entriesFromDB);
              setEntries(entriesFromDB);
            }
          }
        );
        return () => 
          unsubscribe();   
      },[]);
      
      const overLimit = 500;
      const filteredEntries = entries.filter((entry) => entry.calories > overLimit);
      let filteredData = [];
      filteredData = filteredEntries.filter((entry) => !entry.isReviewed);

      const handlePress = (entry) => {
        navigation.navigate('EditEntry', { entry });
      };

    return (
    <View style={styles.description}>
      <BackGroundGradient />
      <FlatList 
       contentContainerStyle={styles.contentContainerStyle}
       data={filteredData}
       
       renderItem={({ item }) => {
            return (
              <EntryItem
                entry={item}
                navigation={navigation}
                // onDelete={onDeletePressed}
                itemPressed={() => handlePress(item)}
                />
                );
                // console.log(item);
              }}
       />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {       
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        
        
      },

    flagListContainer: {
      flex:1,
      backgroundColor: colors.purple,
      alignItems: "stretch",
      justifyContent: "center",
    },

    scrollContentsStyle: {
      alignItems: "center",
    },

    description: {
        padding: 10,
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'space-between',
      },
  });
  


export default AllEntries;
