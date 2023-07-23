import { View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Text from "../../components/Text";

import {
  ProfileIcon,
  HomeIcon,
  ButtonIcon,
  TaskIcon,
  PerfomIcon,
  AddIcon,
} from "../../assets/svg";

import Home from "../Home";
import Profile from "../Profile";
import Task from "../Task";
import Perfomance from "../Perfomance";
import Add from "../Add";

const Tab = createBottomTabNavigator();

export default function Main(navigation, router) {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          // tabBarShowLabel: true,
          tabBarActiveTintColor: "#04325f",
          tabBarInactiveTintColor: "#CED1D4",
          tabBarIcon: ({ focused, color, size }) => {
            let tabsIcon = {
              Home: <HomeIcon fill={color} width={size} height={size} />,
              Task: <TaskIcon fill={color} width={size} height={size} />,
              Perfom: <PerfomIcon fill={color} width={size} height={size} />,
              Add: (
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 90,
                    backgroundColor: "#003362",
                    alignItems: "center",
                  }}
                >
                  <View style={{ marginTop: 12 }}>
                    <AddIcon fill={color} width={34} height={34} />
                  </View>
                </View>
              ),
              Profile: <ProfileIcon fill={color} width={size} height={size} />,
            };

            return <View>{tabsIcon[route.name]}</View>;

            // if (route.name === 'Home') {
            //    if(iconName = focused ){
            //     return <HomeIcon  width={24} height={25} fill={"#000"} />
            //    } else{
            //     return <HomeIcon  width={24} height={25} fill={"#CED1D4"} />
            //    }

            // } else if (route.name === 'Task') {
            //   if(iconName = focused ){
            //     return <TaskIcon  width={24} height={25} fill={"#04325F"} />
            //    } else{
            //     return <TaskIcon  width={24} height={25} fill={"#CED1D4"} />
            //    }
            // } else if (route.name === 'Perfom') {
            //   // iconName = focused ? 'ios-list' : 'ios-list-outline';
            //   if(iconName = focused ){
            //     return <PerfomIcon  width={24} height={25} fill={"#04325F"} />
            //    } else{
            //     return <PerfomIcon  width={24} height={25} fill={"#CED1D4"} />
            //    }
            // }else if (route.name === 'Add'){
            //   if(iconName = focused ){
            //     return <View style={{height: 60, width: 60, borderRadius: 90, backgroundColor: "#003362", alignItems: 'center'}}>
            //     <View style={{marginTop: 12}}>
            //       <AddIcon width={34} height={34} fill={"#000"} />
            //     </View>
            //   </View>
            //    } else{
            //     return <View style={{height: 60, width: 60, borderRadius: 90, backgroundColor: "#003362", alignItems: 'center'}}>
            //       <View style={{marginTop: 12}}>
            //         <AddIcon width={34} height={34} fill={"#CED1D4"} />
            //       </View>
            //     </View>
            //    }
            // } else{
            //   if(iconName = focused ){
            //     return <ProfileIcon  width={24} height={25} fill={"#04325F"} />
            //    } else{
            //     return <ProfileIcon  width={24} height={25} fill={"#CED1D4"} />
            //    }
            // }

            // You can return any component that you like here!
          },
          tabBarLabel: ({ focused, color }) => (
            <Text bold={focused} fontSize={10} color={color}>
              {route.name !== "Add" && route.name}
            </Text>
          ),
          tabBarBadgeStyle: {
            paddingBottom: 10,
            paddingTop: 10,
            height: 50,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Task" component={Task} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Perfom" component={Perfomance} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </View>
  );
}
