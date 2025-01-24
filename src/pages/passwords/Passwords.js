import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Passwords() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        height: 140,
        justifyContent: "flex-end",
        paddingBottom: 24,
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
        color: "#e0ddff"
    }
});
