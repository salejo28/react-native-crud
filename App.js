import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CreateUser from './screens/CreateUser'
import UserDetail from './screens/UserDetail'
import UserList from './screens/UsersList'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="UserList" 
        component={UserList} 
        options={{ title: 'Users List' }} 
      />
      <Stack.Screen 
        name="CreateUser" 
        component={CreateUser} 
        options={{ title: 'Create a New User' }} 
      />
      <Stack.Screen 
        name="UserDetail" 
        component={UserDetail} 
        options={{ title: 'User Details' }} 
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
