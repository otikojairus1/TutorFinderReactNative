import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import StudentTabFour from "./TutorTabs/StudentTab4";

import StudentTabThree from "./TutorTabs/StudentTab2";
import StudentTabone from "./TutorTabs/StudentTab1";
import { AntDesign, Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import StudentTabTwo from "./TutorTabs/StudentTab2";
const Tab = createMaterialBottomTabNavigator();

export default function StudentDashboard({ navigation }) {
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
        children={() => <StudentTabone navigation={navigation} />}
      />
      <Tab.Screen
        name="Tab 2"
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="calendar" size={24} color="black" />
          ),
        }}
        component={StudentTabTwo}
      />
      {/* <Tab.Screen
        name="Tab 3"
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="bell" size={24} color="black" />
          ),
        }}
        component={StudentTabThree}
      /> */}
      <Tab.Screen
        name="Tab 4"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user" size={24} color="black" />
          ),
        }}
        component={StudentTabFour}
      />
    </Tab.Navigator>
  );
}
