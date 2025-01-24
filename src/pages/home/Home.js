import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { ModalPassword } from "../../components/Modal/Modal";

const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home() {
    const [quantity, setQuantity] = useState(10);
    const [passwordValue, setPasswordValue] = useState("");
    const [openModal, setOpenModal] = useState(false);

    function generatePassword() {
        let password = "";
        for (let i = 0; i < quantity; i++) {
            password += charset.charAt(
                Math.floor(Math.random() * charset.length)
            );
        }
        setPasswordValue(password);
        setOpenModal(true);
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/logo.png")}
                style={styles.logo}
            />

            <Text style={styles.title}>{quantity} caracteres</Text>
            <View style={styles.caracterContainer}>
                <Slider
                    step={1}
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    thumbTintColor="#392de9"
                    value={quantity}
                    onValueChange={(value) => setQuantity(value)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={openModal} transparent={true} animationType="fade">
                <ModalPassword password={passwordValue} setOpenModal={setOpenModal}/>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        marginBottom: 60,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    caracterContainer: {
        marginTop: 16,
        marginBottom: 30,
        width: "80%",
        backgroundColor: "#eee",
        padding: 10,
        borderRadius: 50,
    },

    button: {
        width: "80%",
        backgroundColor: "#392de9",
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
