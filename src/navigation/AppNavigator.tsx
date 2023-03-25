import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import NoConnectionScreen from '../screens/NoConnectionScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Войти'}}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{title: 'Главная'}}
      />
      <Stack.Screen
        name="NoConnection"
        component={NoConnectionScreen}
        options={{title: 'Нет соединения'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
