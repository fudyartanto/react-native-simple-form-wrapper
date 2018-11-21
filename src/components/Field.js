import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Field;
