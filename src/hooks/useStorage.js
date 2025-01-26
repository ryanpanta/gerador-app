import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStorage() {
    
    async function getItems(key) {
        try {
            const passwords = await AsyncStorage.getItem(key);

            return JSON.parse(passwords) || [];
        } 
        catch (error){
            console.log("Erro ao buscar", error)
            return [];
        }
    }
    
    async function saveItem(key, value) {
        try {
            let passwords = await getItems(key)
            passwords.push(value)
            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        } 
        catch (error){
            console.log("Erro ao salvar", error)
        }
    } 

    async function removeItem(key, value) {
        try {
            const passwords = await getItems(key)
            const newPasswords = passwords.filter((password) => password !== value)
            await AsyncStorage.setItem(key, JSON.stringify(newPasswords))
            return newPasswords;
        } 
        catch (error){
            console.log("Erro ao remover", error)
            return []
        }
    }

    return {
        getItems, 
        saveItem, 
        removeItem,
    }
}