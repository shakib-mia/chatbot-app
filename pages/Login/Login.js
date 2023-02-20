import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import InputField from '../../components/InputField/InputField';
import { getData } from '../../storeData';

const Login = () => {
    const [text, setText] = useState('value')

    const get = async () => {
        console.log(text);
    }

    return (
        <View style={{ paddingTop: 50, backgroundColor: "#3498db", height: "100%" }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500', borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 10 }}>
                Login
            </Text>

            <View style={{
                paddingVertical: 10
            }}>
                <InputField
                    id='email'
                    placeholder="Enter Your Email Address Here"
                    label="Email"
                    style={{ marginBottom: 10 }}
                    // onChange={e => console.log(text)}
                    // text={text}
                    onChangeText={setText}
                />

                <InputField
                    id='password'
                    placeholder="Enter Your Password Here"
                    label="Password"
                />
            </View>

            <Pressable onPress={() => storeData('abc')}>
                <Text style={{ paddingVertical: 20 }}>Store</Text>
            </Pressable>

            <Pressable onPress={get}>
                <Text>Get</Text>
            </Pressable>
        </View>
    );
};

export default Login;