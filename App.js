import React from 'react'
import SwitchNavigator from './navigation/SwitchNavigator'
import { createAppContainer } from 'react-navigation'

const AppContainer = createAppContainer(SwitchNavigator)
export default class App extends React.Component {
    render() {
        return <AppContainer />
    }
}
