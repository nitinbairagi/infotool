import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GetProfile} from '../Api/api';

function Profile({route}) {
  const [userdata, setuserdata] = useState([]);
  console.log(userdata);

  useEffect(() => {
    GetProfile(route.params.id).then(res => setuserdata(res.data));
  }, []);
  return (
    <View
      style={{
        flex: 1,

        width: '100%',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.text}>Name : {userdata.name}</Text>
      <Text style={styles.text}>Status : {userdata.status}</Text>
      <Text style={styles.text}>Email : {userdata.email}</Text>
      <Text style={styles.text}>Gender : {userdata.gender}</Text>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
});
