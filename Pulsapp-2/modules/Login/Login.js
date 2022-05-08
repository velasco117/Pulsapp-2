import { Text, View, TextInput, Button, Image } from 'react-native'
import React, { Component } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/FontAwesome";
import { inject, observer } from "mobx-react";
import BackgroundGeolocation from "@mauron85/react-native-background-geolocation";
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

import GLOBALS from '../../libs/constants';
import styles from './LoginStyle';
import mainStyle from '../../theme/mainStyle';
import IconLogin from '../../theme/img/Pulsar.svg';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'Supervisorpereira4',
          pass: 'Reciservicios2022',
          onProgress: true
        };
        /* this.props.user.getDataUser(this); */
        this.refInput = React.createRef();
      }

    initLogin = () => {
      debugger
      this.setState({ onProgress: true });
      console.log(this.state.name);
      /* if (this.state.pass !== '' && this.state.name !== '') {
        NetInfo.fetch().then(function(state){
          if (state.isConnected) {
            axios(global.url + 'api-token-auth/', {
              method: 'post',
              timeout: 4000,
              headers: {
                authorization: 'Basic YWRtaW46YmFuY28yMzE=',
              },
              withCredentials: true,
              data: { 
                username: this.state.name,
                password: this.state.pass
              },
            }).then(
              function(response){
                let jsonData = response.data
                console.log(jsonData);
              }.bind(this)
            ).catch(function(error){
              console.log(error);
              this.setState({ onProgress: false });
            }.bind(this))
          }
        }.bind(this))
      } */
        console.log(this.state.name);
        this.props.navigation.navigate('News');
    }

  render() {
    return (
      <View style={styles.main}>
        <LinearGradient
          colors={['#6c973f', 'transparent']}
          style={styles.background}
        />
        <View style={styles.copyRightContainer}>
          <Text style={styles.copyRightItem}>© Diego Lozada millerbsv@gmail.com</Text>
          <Text style={styles.copyRightItem}>Todos los derechos reservados</Text>
          <Text style={styles.copyRightItem}>08302021</Text>
        </View>
        <View style={styles.containerForm}>
          <View style={[styles.logo, styles.logoImage]}>
            <View style={styles.logoContainerWhite}>
              <Image source={IconLogin} style={{width: 100, height: 100}}/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[styles.Title, mainStyle.text, mainStyle.colorLabel, { fontSize: 24 }]}>Iniciar sesión</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={[styles.fontText, mainStyle.colorLabel]}>Usuario</Text>
            <View style={{ marginBottom: 8 }}>
              <View style={mainStyle.inputLogo}>
                <Icon name="user" size={24} color={mainStyle.colorLabel.color} />
              </View>
              <TextInput
                style={[mainStyle.input, mainStyle.text]}
                placeholder=""
                returnKeyType="next"
                value={this.state.name}
                onChangeText={(name) => this.setState({ name: name })}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
            </View>
            <Text style={[styles.fontText, mainStyle.colorLabel]}>Contraseña</Text>
            <View style={{ marginBottom: 30 }}>
              <View style={mainStyle.inputLogo}>
                <Icon name="lock" size={24} color="#616161" />
              </View>
              <TextInput
                style={[mainStyle.input, mainStyle.text]}
                placeholder=""
                returnKeyType="done"
                value={this.state.pass}
                onChangeText={(pass) => this.setState({ pass: pass })}
                secureTextEntry={true}
              />
            </View>
            <Button
              onPress={this.initLogin}
              style={[mainStyle.text]}
              title="Ingresar"
              color={GLOBALS.COLOR.BUTTON_LOGIN}
            />
          </View>
        </View>
      </View>
    )
  }
}