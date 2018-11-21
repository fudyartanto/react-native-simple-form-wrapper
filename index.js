/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Form from './src/components/FormWrapper';
export { Form };

AppRegistry.registerComponent(appName, () => App);
