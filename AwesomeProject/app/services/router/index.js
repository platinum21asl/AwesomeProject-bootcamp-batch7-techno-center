import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Routes;
