import {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import {Getuser} from '../Api/api';

function User({navigation}) {
  const [user, setuser] = useState([]);
  console.log(user);

  useEffect(() => {
    Getuser().then(res => {
      //   console.log(res);
      setuser(res.data);
    });
  }, []);

  function userHandler(data) {
    // console.log(data.item.id);
    function Handler() {
      navigation.navigate('post', {id: data.item.id});
    }
    return (
      <Pressable onPress={Handler}>
        <View
          style={{
            alignItems: 'flex-start',
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <Text style={styles.text}>Name:{data.item.name}</Text>
          <Text style={styles.text}>Status:{data.item.status}</Text>
          <Text style={styles.text}>Email:{data.item.email}</Text>
          <Text style={styles.text}>Gender:{data.item.gender}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View>
      <FlatList data={user} renderItem={userHandler}></FlatList>
    </View>
  );
}

export default User;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
  },
});
