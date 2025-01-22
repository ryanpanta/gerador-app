import {
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
    TouchableOpacity,
} from "react-native";

export function ModalPassword({ password, setOpenModal }) {
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={styles.passwordContainer}>
                    <Text style={styles.password}>{password}</Text>
                </Pressable>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.backButton} onPress={() => setOpenModal(false)}>
                        <Text style={{color: '#f00'}}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },

    modal: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
        width: "80%",
        borderRadius: 8,
    },

    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 12,
    },

    passwordContainer: {
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#eee",
        width: "90%",
    },

    password: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },

    containerButton: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },

    backButton: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 10,
    },

    saveButton: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 10,
        backgroundColor: "#392de9",
        borderRadius: 8,
    },
});
