import React from 'react'
import 'react-native-gesture-handler';
import MainScreen from './MainScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle="light-content" backgroundColor='rgb(46, 110, 175)' />
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(46, 110, 175)' }}>
                <NavigationContainer>
                    <MainScreen.MainScreenComponent/>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default App