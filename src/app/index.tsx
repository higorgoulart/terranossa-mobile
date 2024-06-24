import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {PlantingInfo} from "@/pages/PlantingInfo/PlantingInfo";
import {ActivitiesCalendar} from "@/pages/ActivitiesCalendar/ActivitiesCalendar";
import Login from "@/pages/Login/Login";
import {View} from "react-native";

const Tab = createBottomTabNavigator();
export default function Page() {
  return (
    <View className="flex flex-1">
        <BottomTabs />
    </View>
  );
}

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Planting"
            backBehavior="history"
            screenOptions={{
                tabBarStyle: { backgroundColor: '#435C34' },
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Planting"
                component={PlantingInfo}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="leaf-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={ActivitiesCalendar}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar-outline" color={color} size={size} />
                    ),
                    unmountOnBlur: true
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="log-in-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


