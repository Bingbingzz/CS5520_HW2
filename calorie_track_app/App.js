import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import colors from "./constant/colors";
import React from "react";
import AddButton from "./components/AddButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AddEntry from "./screens/AddEntry";
import AllEntries from "./screens/AllEntries";
import EditEntry from "./screens/EditEntry";
import OverLimitEntries from "./screens/OverLimitEntries";
import { Component } from "react/cjs/react.production.min";

const Stack = createNativeStackNavigator();
const ButtomTabs = createBottomTabNavigator();

function EntryBottomTabs() {
  return (
    <ButtomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: colors.purple },
        headerTintColor: colors.white,
        tabBarStyle: { backgroundColor: colors.purple },
        tabBarActiveTintColor: colors.lightYellow,
        headerRight: () => (
          <AddButton
            icon="add"
            size={30}
            color={colors.white}
            onPress={() => {
              navigation.navigate("AddEntry");
            }}
          />
        ),
      })}
    >
      <ButtomTabs.Screen
        name="allEntries"
        component={AllEntries}
        options={{
          title: "All Entries",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="beer" color={color} />
          ),
        }}
      />
      <ButtomTabs.Screen
        name="overLimitEntries"
        component={OverLimitEntries}
        options={{
          title: "Over-limit Entries",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} name="alert" color={color} />
          ),
        }}
      />
    </ButtomTabs.Navigator>
  );
}

export default function App() {
  return (
    // <LinearGradient
    //   colors={[colors.lightPurple, "transparent"]}
    //   style={styles.container}
    // >
    <>
      <StatusBar style="auto" />
      {/* <SafeAreaView style={styles.view}> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.purple },
            headerTintColor: colors.white,
          }}
        >
          <Stack.Screen
            name="EntryBottomTabs"
            component={EntryBottomTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="AddEntry" component={AddEntry} />
          <Stack.Screen name="EditEntry" component={EditEntry} />
        </Stack.Navigator>
        {/* </SafeAreaView> */}
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightPurple,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   view: {
//     width: "80%",
//   },
// });
