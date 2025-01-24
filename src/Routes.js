import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home/Home";
import { Passwords } from "./pages/passwords/Passwords";

import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons
                            size={size}
                            color={color}
                            name={focused ? "home" : "home-outline"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Senhas"
                component={Passwords}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons
                            size={size}
                            color={color}
                            name={
                                focused ? "lock-closed" : "lock-closed-outline"
                            }
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
});
