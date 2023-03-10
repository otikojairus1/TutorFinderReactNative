import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CreateAccount from "./screens/CreateAccount";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./screens/Dashboard";
import CreateCourse from "./screens/CreateCourse";
import StudentDashboard from "./screens/StudentDashboard";
import Announce from "./screens/Announce";
// import { Provider } from "@react-native-material/core";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <Provider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount">
        <Stack.Screen
          name="CreateAccount"
          options={{ headerShown: false }}
          component={CreateAccount}
        />
        <Stack.Screen
          name="Dashboard"
          options={{ headerShown: false }}
          component={Dashboard}
        />
        <Stack.Screen
          name="Create Course"
          options={{ headerShown: false }}
          component={CreateCourse}
        />
        <Stack.Screen
          name="StudentDashboard"
          options={{ headerShown: false }}
          component={StudentDashboard}
        />

        <Stack.Screen
          name="Announce"
          options={{ headerShown: false }}
          component={Announce}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // </Provider>
  );
}
