import React from "react";
import Routes from "../services/router";
import { NavigationContainer } from "@react-navigation/native";

export default function IndexLayout() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
