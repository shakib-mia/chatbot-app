import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import { getData, storeData } from './storeData';
// import { storeData } from './storeData';

export default function App() {
  const [token, setToken] = useState(AsyncStorage.getItem('token'))

  getData('token', setToken)

  return <>
    {token ? <HomePage setToken={setToken} /> : <Login setToken={setToken} />}
  </>;
}
