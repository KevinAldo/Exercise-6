import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({name, username, email, address, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.user}>{username}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
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
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  user: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 18,
    fontWeight: '700',
  },
  address: {
    fontSize: 18,
    fontWeight: '700',
  },
  phone: {
    fontSize: 18,
    fontWeight: '700',
  },
});