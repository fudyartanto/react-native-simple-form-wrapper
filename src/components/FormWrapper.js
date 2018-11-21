import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux';
import Form from './Form';

class FormWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Form {...this.props}/>
      </Provider>
    );
  }
}

export default FormWrapper;
