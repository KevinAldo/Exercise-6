import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import DaftarUser from './pages/user/index'
import Registrasi from './pages/regis/index'
const App = () => {
  return (
    <ScrollView>
      <Registrasi/>
      <DaftarUser/>
    </ScrollView>
  )
}

export default App;