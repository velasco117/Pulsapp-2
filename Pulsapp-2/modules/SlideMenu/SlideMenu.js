import { Text, View,  TouchableOpacity,Image, ScrollView, } from 'react-native';
import React, { Component } from 'react';
import { inject,Observer } from "mobx-react";
import Icon from '@expo/vector-icons/Ionicons'

import SlideMenuStyle from './SlideMenuStyle';
import mainStyle from "../../theme/mainStyle";
import iconMaintenance from '../../theme/img/icon/diagnostico.png';
import iconNovelty from '../../theme/img/icon/reparar.png';
import iconClose from '../../theme/img/icon/cerrar.png';
import iconAvatar from '../../theme/img/icon/avatar5.png';
import Logo from '../../theme/img/Pulsar.png';

export default class SlideMenu extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    var imagePerfil = this.props.user.image;
    var global = {name: this.props.user.nameComplete, perfil: this.props.user.image};
    var name = 'User Prueba'
    return (
      <View style={SlideMenuStyle.gradiant}>
        <View style={SlideMenuStyle.maintop}>
          <View style={[SlideMenuStyle.mainTitle, {position: 'relative'}]}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 50,
                height: 50,
                padding: 15,
                color: '#C8C8C8',
              }}
              onPress={() => {
                this.props.navigation.closeDrawer();
              }}>
              <Image style={{width: 20, height: 20}} source={iconClose} />
            </TouchableOpacity>
            
          </View>
          <View style={SlideMenuStyle.maintopimage}>
            <View style={SlideMenuStyle.maintopimage_marco}>
              <View style={SlideMenuStyle.imagemarco}>
                <Image
                  style={{width: 110, height: 110, borderRadius: 55}}
                  source={iconAvatar}
                />
              </View>
            </View>
          </View>
          <View style={SlideMenuStyle.infoView}>
            <View style={SlideMenuStyle.infoView_Name}>
              <Text style={SlideMenuStyle.textName}>{name}</Text>
            </View>
          </View>
        </View>
        <View style={SlideMenuStyle.mainbottom}>
            <View style={SlideMenuStyle.mainbottomContainer}>
              <ScrollView>
                <TouchableOpacity onPress={this.gotoNovelty}>
                    <View style={SlideMenuStyle.viewIconMenu}>
                    <Image
                        style={SlideMenuStyle.imageItemIcon}
                        source={iconMaintenance}
                    />
                    <View style={SlideMenuStyle.lineML}>
                        <Text style={SlideMenuStyle.textMenuItems}>Novedades</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoMaintenance} >
                    <View style={SlideMenuStyle.viewIconMenu}>
                      <Image
                        style={SlideMenuStyle.imageItemIcon}
                        source={iconNovelty}
                      />
                      <View style={SlideMenuStyle.lineML}>
                        <Text style={SlideMenuStyle.textMenuItems}>
                          Mantenimientos
                        </Text>
                      </View>
                    </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
        </View>
        <View style={SlideMenuStyle.logOut}>
            <TouchableOpacity onPress={this.logOut}>
                <Text style={[SlideMenuStyle.textMenuItems, , mainStyle.text, mainStyle.uppercase, {color: 'white'}]}>
                    Cerrar sesión
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  logOut = async () => {
    let token = '';
    let cc = '';
    let name = '';
    let email = '';
    let nameComplete = '';
    let image = '';
    let dataSource2 = [];
    let dataSource = [];
    /* this.props.history.setDataHistoryM(dataSource2);
    this.props.history.setDataHistoryN(dataSource);
    this.props.user.setDataUser(token, cc, name, email, nameComplete, image); */
    this.props.navigation.replace('Login', {});
    this.props.navigation.closeDrawer();
  
  };
  
  gotoNovelty = () => {
    this.props.navigation.navigate('News');
    this.props.navigation.closeDrawer();
  };
  
  gotoMaintenance = () => {
    this.props.navigation.navigate('Maintenance');
    this.props.navigation.closeDrawer();
  };
  
}