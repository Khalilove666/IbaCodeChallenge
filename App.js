import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import {Provider} from 'react-redux';

import store from "./store";
import {RootNav} from './navigation';




const App = () => {
  return (
    // <Provider store={store}>
      <RootNav/>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default App;
