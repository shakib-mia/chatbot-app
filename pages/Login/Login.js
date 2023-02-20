import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { forwardRef, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import InputField from '../../components/InputField/InputField';
import { getData } from '../../storeData';
import {url} from './../../constants.js'

const Login = ({setToken}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    const login = async () => {
        fetch(url + '/users/' + email + '/' + pass)
        .then(res => res.json())
        .then(data => {
            AsyncStorage.setItem('token', data[0]._id);
            setToken(data[0]._id)
        })

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
                    text={email}
                    placeholder="Enter Your Email Address Here"
                    label="Email"
                    style={{ marginBottom: 10 }}
                    onChangeText={e => setEmail(e.nativeEvent.text)}
                />

                <InputField
                    id='password'
                    placeholder="Enter Your Password Here"
                    label="Password"
                    type="password"
                    text={pass}
                    onChangeText={e => setPass(e.nativeEvent.text)}
                />
            </View>

            <Pressable onPress={login} style={{ marginLeft: 'auto', marginRight: 10, backgroundColor: '#2ecc71', borderRadius: 5 }}>
                <Text style={{ paddingVertical: 5, paddingHorizontal: 10, color: 'white' }}>Submit</Text>
            </Pressable>
        </View>
    );
};

export default Login;