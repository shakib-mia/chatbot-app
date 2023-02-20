import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
        // saving error
    }
}

export const getData = async (itemName) => {
    try {
        return await AsyncStorage.getItem(itemName);
    } catch {}
}