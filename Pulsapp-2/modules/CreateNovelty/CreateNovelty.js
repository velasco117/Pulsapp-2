/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  //AsyncStorage,
  ToastAndroid,
} from 'react-native';
import { WebView } from 'react-native-webview';
import mainStyle from "../../libs/mainStyle";
import styles from "./CreateNoveltyStyle";
//import Progress from "../../Libs/Progress";
import logo from '../../theme/img/logo.png';
//import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import Header from "../../libs/Header/header";
import iconMenu from '../../theme/img/icon/menu-abierto.png';

import { inject, observer } from "mobx-react";
//import LinearGradient from 'react-native-linear-gradient';

class CreateNovelty extends Component {

  static navigationOptions = {
    title: 'Crear novedad',
    headerStyle: {marginLeft:32}
  };

  constructor(props) {
    super(props);
    debugger;
  }
  
  /* @description
    el metodo render se encarga de renderizar una que viene del servidor y el usuario visualiza desde 
    su smartphone
   */
  render (){

    const INJECTED_JAVASCRIPT = `
        sessionStorage.setItem('token', '${global.token}');
    `;
    return (
      <View style={styles.containerApp}>
          <Header title='Crear novedad' openMenu={this.props.navigation.openDrawer}></Header>
          <WebView
            source={{
              uri: 'http://ascmillerbsv.eastus.cloudapp.azure.com:8000/crear-novedad-app/'
            }}
            injectedJavaScript={`
            token = '${this.props.user.token}';
            urlServices = 'http://ascmillerbsv.eastus.cloudapp.azure.com:8000';
            init();
            //setTimeout(function() { window.alert(token) }, 2000);
            true; // note: this is required, or you'll sometimes get silent failures
          `}
          />
          
      </View>

    );
  }
}

const storeInject = inject('user')(observer(CreateNovelty));

export default storeInject;
/*
<View style={{height:50, with:'100%',flexDirection:'row'}}>
      <TouchableOpacity style={{zIndex: 1, position: 'absolute',textAlign: 'center', top: 0, left: 0, width: 50, height: 50, padding:15, backgroundColor:'red'}} onPress={() => {
        debugger;
          this.props.navigation.openDrawer();
        }}>
        <Image style={{width: 20,height: 20}} source={iconMenu}/>
      </TouchableOpacity>
      <Text style={{flex:1, lineHeight: 50, textAlign:'center', fontSize:20}}>{this.props.title}</Text>
      </View>*/