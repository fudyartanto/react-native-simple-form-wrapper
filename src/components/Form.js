import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/form/actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return (
      <View>
        <Text> Hello Form </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ form }) => {
  return {
    form: form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
