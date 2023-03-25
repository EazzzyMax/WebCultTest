import React, {useEffect, useRef, useState} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import NetInfo from '@react-native-community/netinfo';
import {RootParamList} from './navigation/RootParamList';

const App = () => {
  const navigationRef = useRef<NavigationContainerRef<RootParamList> | null>(
    null,
  );
  const [isConnected, setIsConnected] = useState<boolean | null>(true); // Добавьте состояние подключения

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isConnected) {
      console.log('connected');
      // Если подключение есть, переходите на первый экран
      navigationRef.current?.navigate('Start');
    } else {
      console.log('disconnected');
      // Если подключение отсутствует, переходите на экран NoConnection
      navigationRef.current?.navigate('NoConnection');
    }
  }, [isConnected]);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
