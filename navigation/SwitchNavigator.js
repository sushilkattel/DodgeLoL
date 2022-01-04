import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Home from '../components/home/Home'

const SwitchNavigator = createSwitchNavigator(
    {
        Home: {
            screen: Home
        }
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(SwitchNavigator)
