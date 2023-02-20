import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
        // saving error
    }
}

export const getData = async (itemName, setToken) => {
    try {
        const data = await AsyncStorage.getItem(itemName);
        // const token = await AsyncStorage.getItem(itemName);
        // return token
        // console.log(data);
        setToken(data)
    } catch { }
}