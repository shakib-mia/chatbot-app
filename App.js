import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {


  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState("");



  // const getMovies = async () => {
  //   try {
  //     const response = await fetch('http://localhost:4000/');
  //     const json = await response.json();
  //     setData(json);
  //     console.log(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);


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
          borderRadius: "50%"
        }} />
        <Text style={{
          marginLeft: 5,
          color: "white"
        }}>Bot</Text>
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
