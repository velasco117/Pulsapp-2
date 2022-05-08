import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

import iconMenu from '../../theme/img/icon/menu-abierto.png';

export default class Header extends Component {
  render() {
    return (
        <View style={{height:50, with:'100%',flexDirection:'row'}}>
            <TouchableOpacity style={{zIndex: 1, position: 'absolute',textAlign: 'center', top: 0, left: 0, width: 50, height: 50, padding:15}} onPress={() => {
                this.props.openMenu();
            }}>
                <Image style={{width: 20,height: 20}} source={iconMenu}/>
            </TouchableOpacity>
            <Text style={{flex:1, lineHeight: 50, textAlign:'center', fontSize:20}}>{this.props.title}</Text>
        </View>
    )
  }
}