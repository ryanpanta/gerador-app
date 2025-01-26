import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStorage } from "../../hooks/useStorage";
import PasswordItem from "../../components/Password/PasswordItem";
import { useIsFocused } from "@react-navigation/native";
export function Passwords() {

    const [listPasswords, setListPasswords] = React.useState([]);

    const { getItems, removeItem } = useStorage();
    const isFocused = useIsFocused();
    
    async function getPasswords() {
        const passwords = await getItems("@pass")

        setListPasswords(passwords)
        console.log(listPasswords)
    }

    async function handleRemovePassword(password) {
        const newPasswords = await removeItem("@pass", password)
        setListPasswords(newPasswords)
    }

    React.useEffect(() => {
        getPasswords()
    }, [isFocused])

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <PasswordItem password={item} removePassword={() => handleRemovePassword(item)} />}
                />
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
    }, 
    listContainer: {
        paddingHorizontal: 20,
        marginTop: 30, 
    }
});
