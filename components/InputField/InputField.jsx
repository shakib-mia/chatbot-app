import React, { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';

const InputField = ({ placeholder, label, style, text, onChangeText, type }) => {
    const inputRef = useRef(null)
    return (
        <View style={style}>
            <Text onPress={() => inputRef.current.focus()} style={{ color: 'white', paddingLeft: 10 }}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                ref={inputRef}
                secureTextEntry={type === "password"}
                style={{ backgroundColor: '#fff', color: "black", paddingHorizontal: 6, paddingVertical: 2, marginHorizontal: 6, borderRadius: 6, marginTop: 4 }}
                onChange={onChangeText}
                value={text}
            />
        </View>
    );
};

export default InputField;