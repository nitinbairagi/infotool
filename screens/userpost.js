import {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import {GetPost} from '../Api/api';

function UserPost({route}) {
  const [user, setuser] = useState([]);
  const [id, setid] = useState('');
  //   console.log(user);
  console.log(route);

  useEffect(() => {
    GetPost(route.params.id).then(res => {
      //   console.log(res);
      setuser(res.data);
    });
  }, []);

  function userHandler(data) {
    // console.log(data);
    return (
      <Pressable>
        <View
          style={{
            alignItems: 'flex-start',
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <Text style={[styles.text, {color: '#000000', fontWeight: 'bold'}]}>
            Title:{data.item.title}
          </Text>
          <Text style={styles.text}>Description:{data.item.body}</Text>
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

export default UserPost;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
  },
});
