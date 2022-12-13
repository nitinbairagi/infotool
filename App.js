import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import User from './screens/user';
import UserPost from './screens/userpost';
import Profile from './screens/profile';
const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="user"
              component={User}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="post"
              component={UserPost}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="profile"
              component={Profile}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
