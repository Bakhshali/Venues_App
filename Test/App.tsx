import { StyleSheet, Text, View ,LogBox} from 'react-native'
import React from 'react'
import MainTab from './src/navigations/tabs/MainTab'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <MainTab/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})