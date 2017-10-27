import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NativeDemo from 'react-native-ios-lib-demo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      demoString: 'Waiting...',
    };
  }

  componentDidMount = () => {
    if (NativeDemo) {
      NativeDemo.helloWorld().then((result) => {
        this.setState({
          demoString: result,
        });
      });
    } else {
      this.setState({
        demoString: 'Native package is not available. Did you detach and link?',
      });
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.demoString}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
