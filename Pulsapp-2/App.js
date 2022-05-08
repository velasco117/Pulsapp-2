import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'mobx-react'

import Nav from './modules/index';
import Novelties from "./mobx/stores/novelties";
import User from './mobx/stores/User';

//global.url = 'http://newgng.eastus.cloudapp.azure.com/';
global.url = 'http://ascmillerbsv.eastus.cloudapp.azure.com:9494/';
//global.url = 'http://192.168.0.29:8000/';
//global.urlNode = 'http://newgng.eastus.cloudapp.azure.com:8080';
global.urlNode = 'http://ascmillerbsv.eastus.cloudapp.azure.com:8080';
//global.urlNode = 'http://192.168.0.29:8080';
global.Auth = 'Basic YWRtaW46YmFuY28yMzE=';
global.token = 'Token f1cf06151e22c2c680e61d8eb82317d6dbe54edf';

export default function App() {
  return (
    <Provider novelties={Novelties} user={User}>
      <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#272C36',
          }}>
        <Nav/>
      </SafeAreaView>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272C36',
  },
});
