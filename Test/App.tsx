import { StyleSheet, Text, View, LogBox } from 'react-native'
import React from 'react'
import MainTab from './src/navigations/tabs/MainTab'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/vanueStore'
const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})