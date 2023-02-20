import React from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Container from '../../components/Container/Container';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { url } from './../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ setToken }) => {
    const [query, setQuery] = useState('');
    const [reply, setReply] = useState('');
    const [message, setMessage] = useState('')
    const [data, setData] = useState('');

    const sendMessage = () => {
        setMessage(query)
        fetch(`${url}/query/${query}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch(err => console.error(err));

        setQuery('')
    };

    // console.log('object');

    useEffect(() => {
        fetch(`${url}/messages`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [data]);

    return <View style={{
        height: "100%",
        backgroundColor: "#9b59b6"
    }}>
        <View style={{
            backgroundColor: '#8e44ad',
            padding: 10,
            paddingTop: 40,
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <View style={{
                display: 'flex',
                flexDirection: "row",
                alignItems: 'center'
            }}>
                <Image source={require('./../../assets/bot-icon.png')} style={{
                    width: 30,
                    height: 30,
                    borderRadius: 1000
                }} />
                <Text style={{
                    marginLeft: 5,
                    color: "white",
                    fontWeight: "500"
                }}>Bot</Text>
            </View>

            <View>
                <Pressable
                    style={{
                        backgroundColor: '#e74c3c',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 5
                    }}
                    onPress={() => {
                        AsyncStorage.removeItem('token');
                        setToken(null)
                    }}>
                    <Text style={{color: 'white', fontSize: 10}}>Sign Out</Text>
                </Pressable>
            </View>
        </View>

        <ScrollView id="container">
            <Container query={message ? message : query} data={data} />
        </ScrollView>


        <View style={{
            backgroundColor: '#8e44ad',
            padding: 10,
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
        }}>
            <TextInput
                value={query}
                onChangeText={text => setQuery(text)}
                placeholder="Type Your Message Here"
                style={{
                    color: 'white'
                }}
            />

            <Pressable onPress={sendMessage}>
                <Image source={require('./../../assets/sendIcon.png')} style={{
                    width: 24,
                    height: 24,
                }} />
            </Pressable>
        </View>


        <StatusBar style="auto" />
    </View>;
};

export default HomePage;