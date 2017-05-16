//node_modules///import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'

import createStore from '../redux'
import firebase from 'firebase'
import { Font, AppLoading } from 'expo';
import firebase_config from '../config/fbconfig'

//import createStore from '../Redux'
//import { createStore } from 'redux' //use default redux createstore for now


// create our store
const store = createStore();

/**
 * Provides an entry point into our application.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

class App extends Component {
  state = {
    fontsAreLoaded: false,
  }

  async componentWillMount(){
    firebase.initializeApp(firebase_config);

    await Font.loadAsync({
          'Rubik-Black': require('../../node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
          'Rubik-BlackItalic': require('../../node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
          'Rubik-Bold': require('../../node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
          'Rubik-BoldItalic': require('../../node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
          'Rubik-Italic': require('../../node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
          'Rubik-Light': require('../../node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
          'Rubik-LightItalic': require('../../node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
          'Rubik-Medium': require('../../node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
          'Rubik-MediumItalic': require('../../node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
          'Rubik-Regular': require('../../node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
          'rubicon-icon-font': require('../../node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({fontsAreLoaded: true});
  }

  render () {
    if (!this.state.fontsAreLoaded) {
        return <AppLoading />;
    }
    return (
       <Provider store={store}>
        <RootContainer />
       </Provider>
    )
  }
}

// allow reactotron overlay for fast design
//const AppWithBenefits = console.tron.overlay(App)

//export default AppWithBenefits
export default App;
