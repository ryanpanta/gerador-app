import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function PasswordItem({password, removePassword}) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.password}>{password}</Text>
      <Ionicons name="trash" size={20} color="#ff0000"/>  
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
        backgroundColor: "#e0e0e0",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    password: {
        fontSize: 20,
        fontWeight: "bold",
    }

})