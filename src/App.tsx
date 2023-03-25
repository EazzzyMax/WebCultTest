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
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

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
      navigationRef.current?.navigate('Start');
    } else {
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
