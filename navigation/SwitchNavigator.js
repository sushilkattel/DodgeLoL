import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Home from '../components/home/Home'
import Profile from '../components/profile/Profile'
import MatchResults from '../components/match/MatchResults'
import Analysis from '../components/analysis/Analysis'

const SwitchNavigator = createSwitchNavigator(
    {
        Home: {
            screen: Home
        },
        Profile: {
            screen: Profile
        },
        MatchResults: {
          screen: MatchResults
        },
        Analysis: {
          screen: Analysis
        },
    },
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(SwitchNavigator)
