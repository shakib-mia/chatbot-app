import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Container from './components/Container/Container';

export default function App() {
  const [text, onChangeText] = useState('');
  const [query, setQuery] = useState('');
  const [reply, setReply] = useState('')
  const [data, setData] = useState('');
  const pair = []

  // const pair = []

  const sendMessage =  () => {

    fetch(`http://192.168.0.103:4000/query/${text}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.text);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetch("http://192.168.0.103:4000/messages")
    .then(res => res.json())
    .then(data => setData(data))
  }, []);



  return (
    <View style={{
      height: "100%",
      backgroundColor: "#9b59b6"
    }}>
      <View style={{
        backgroundColor: '#8e44ad',
        padding: 10,
        paddingTop: 40,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        // gap: 10
      }}>
        <Image source={require('./assets/bot-icon.png')} style={{
          width: 30,
          height: 30,
        }} />
        <Text style={{
          marginLeft: 5,
          color: "white",
          fontWeight: "500"
        }}>Bot</Text>
      </View>

      <ScrollView id="container">
        <Container data={data} />
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
          value={text}
          onChangeText={onChangeText}
          placeholder="Type Your Message Here"
          style={{
            color: 'white'
          }}
        />

        <Pressable onPress={sendMessage}>
          <Image source={require('./assets/sendIcon.png')} style={{
            width: 30,
            height: 30,
          }} />
        </Pressable>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8e44ad',
    padding: 10,
    paddingTop: 40,
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center'
  }
});
