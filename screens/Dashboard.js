import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Tabfour from "./TutorTabs/Tab4";
import Tabthree from "./TutorTabs/Tab3";
import Tabtwo from "./TutorTabs/Tab2";
import Tabone from "./TutorTabs/Tab1";
import { AntDesign, Fontisto, SimpleLineIcons } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();

export default function Dashboard({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tab 1"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
        children={() => <Tabone navigation={navigation} />}
      />
      <Tab.Screen
        name="Tab 2"
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="calendar" size={24} color="black" />
          ),
        }}
        component={Tabtwo}
      />
      <Tab.Screen
        name="Tab 3"
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="bell" size={24} color="black" />
          ),
        }}
        children={() => <Tabthree navigation={navigation} />}
      />
      <Tab.Screen
        name="Tab 4"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user" size={24} color="black" />
          ),
        }}
        component={Tabfour}
      />
    </Tab.Navigator>
  );
}
