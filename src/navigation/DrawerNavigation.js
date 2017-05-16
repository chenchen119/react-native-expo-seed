//import React, { Component } from 'react'
import { DrawerNavigator } from 'react-navigation'
import HomeScreen from '../containers/HomeScreen'
import Drawer from '../components/Drawer'


const DrawerNav = DrawerNavigator(
  {
    Notifications: { screen: HomeScreen },
    Home: { screen: HomeScreen },
  },
  {
    drawerWidth: 300,
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#b3b3b3',
      activeBackgroundColor: 'grey',
      style: {
      }
    }
  }
)

/* Customize if we want to ? */

/*
class DrawerNavigation extends Component {

  render () {
    return (
      <DrawerNavigator />
    )
  }
}
*/

export default DrawerNav
