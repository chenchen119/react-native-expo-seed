import React, { Component } from 'react'
import { View, StatusBar, Text, StyleSheet } from 'react-native'

//import HomeScreen from './HomeScreen'
import SplashScreen from '../components/SplashScreen'
import LoginScreen from './LoginScreen'
import DrawerNav from '../navigation/DrawerNavigation'

import { StackNavigator, NavigationActions } from 'react-navigation';
//import Navigation from '../navigation/AppNavigation'

import { connect } from 'react-redux'
import StartupActions from '../redux/StartupRedux'
//import ReduxPersist from '../config/ReduxPersist'

// Styles
//import styles from './Styles/RootContainerStyles'

const AuthNav = StackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    LoginScreen: { screen: LoginScreen },
    Home: { screen: DrawerNav },
  },
  {
    headerMode: 'none',
    // initialRouteName: 'SplashScreen',
    navigationOptions: {
      header: null,
    },
  },
);

class RootContainer extends Component {


  componentDidMount () {
    // if redux persist is not active fire startup action
    // if (!ReduxPersist.active) {
      this.props.startup()
    // }
  }

  componentDidUpdate() {
    this.routeOnAuth();
  }

  routeOnAuth() {
    const navigateTo = (routeName) => {
      const actionToDispatch = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
      });
      this.navigator.dispatch(actionToDispatch);
    };

    if (this.props.loggedIn) {
      navigateTo('Home');
    } else {
      navigateTo('LoginScreen');
    }
  }

  onLayout = event => {
    if (this.state.dimensions) return // layout was already called
    let {width, height} = event.nativeEvent.layout
    this.setState({dimensions: {width, height}})
  }

  render () {

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='dark-content' />
        <AuthNav
          ref={(nav) => {
            this.navigator = nav;
          }}
        />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})


const styles = StyleSheet.create({
  applicationView: {
    flex: 1,
  }
})

const mapStateToProps = ({ login }) => {
  const { loggedIn } = login;
  return { loggedIn };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
