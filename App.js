import React from 'react';
import { Root } from "native-base";
import { StyleSheet, Text, View } from 'react-native';
// import Expo from 'expo';
import Navigation from '@navigation';


export default class App extends React.Component {

  constructor(props) {
    super()
    this.state = {
      appIsReady: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ appIsReady: true })
  }

  render() {
    if (!this.state.appIsReady) {
      return <Expo.AppLoading />
    }

    return (
      <Root>
        <View style={styles.container}>
          <Navigation ref={'navigator'} />
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
