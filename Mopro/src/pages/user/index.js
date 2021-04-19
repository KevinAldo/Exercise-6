import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from './card.js';
import Axios from 'axios';

const DaftarUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   Axios.get('http://10.0.2.2:3004/users').then(res =>
     setUsers(res.data),
    );
  }, [users]);

  // useEffect(() => {
  //   Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
  //     setUsers(res.data),
  //    );
  //  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => (
          <Card style = {styles.card}
            key ={item.id}
            email ={item.email}
            firstName ={item.first_name}
            lastName ={item.last_name}
          />  
          // <Card style = {styles.card}
          //   key ={item.id}
          //   name ={item.name}
          //   username ={item.username}
          //   email ={item.email}
          //   address ={item.address.street}
          //   phone ={item.phone}
          // />
        ))}
      </ScrollView>
    </View>
  );
};

export default DaftarUser;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  }, 
  card: {
    marginTop: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 16,
    paddingVertical: 12,
    marginTop: 5,
    marginTop: 15,
    alignItems: 'center',
  },
  email: {
    fontSize: 20,
    fontWeight: '700',
  },
  firstName: {
    fontSize: 20,
    fontWeight: '700',
  },
  lastName: {
    fontSize: 20,
    fontWeight: '700',
  },
  // user: {
  //   fontSize: 18,
  //   fontWeight: '700',
  // },
  // address: {
  //   fontSize: 18,
  //   fontWeight: '700',
  // },
  // phone: {
  //   fontSize: 18,
  //   fontWeight: '700',
  // },
});