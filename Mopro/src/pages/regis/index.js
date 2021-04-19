import React, {useState} from 'react';
import {View,TextInput,Text, Button,StyleSheet} from 'react-native';
import Axios from 'axios';
// import {Text, View, StyleSheet, TouchableOpacity, DrawerLayoutAndroidComponent, ScrollView} from 'react-native';
// import TextInput from './textInput';
// import Button from './button'
// import Gap from './gap';

const App = () => {

  // const [welcome, setWelcome] = useState('Registration')
  const [email, setEmail] = useState();
  const [first_name, setfirstName] = useState();
  const [last_name, setlastName] = useState();

  // useEffect(() => {
  // console.log('component did mount')
  // }, []);

  // useEffect(() => {
  //   console.log('componen did update')

  // }, [welcome])

  const subData = () => {
    const tambah = {
      email: email,
      first_name: first_name,
      last_name: last_name,
    };
    Axios.post('http://10.0.2.2:3004/users', tambah)
  }

  return (
  // <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Registrasi</Text>
        {/* <Gap height={40} /> */}
        <TextInput label="Email"
        value ={email} placeholder="Masukan Email anda"
        onChangeText ={e=>setEmail(e)}/>
        <TextInput label="First Name" 
        value ={first_name} placeholder="Masukan Firstname anda"
        onChangeText ={e=>setfirstName(e)}/>
        {/* <Gap height={24} /> */}
        <TextInput label="Last Name" 
        value ={last_name} placeholder="Masukan Lastname anda"
        onChangeText ={e=>setlastName(e)}/>
        {/* <Gap height={48} /> 
        <Gap height={48} />
        <TextInput label="Address" placeholder="Masukan nama lengkap anda" value ={Pasword} onChangeText ={(e)=>setPasword(e)} secureTextEntry ={true}/>
        <Gap height={48} />
        <TextInput label="Phone Number" placeholder="Masukan nama lengkap anda" value ={Pasword} onChangeText ={(e)=>setPasword(e)} secureTextEntry ={true}/>
        <Gap height={48} /> */}
        <Button title='Save' onPress={subData} />
      </View>
  // </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  button:{
    marginTop: 10,
    backgroundColor: '#C238CE',
    borderRadius: 7,
  },
  TextButton:{
    paddingVertical: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }

});

export default App;