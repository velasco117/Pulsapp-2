import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import iconMenu from '../../theme/img/icon/menu-abierto.png';
import mainStyle from "../../theme/mainStyle";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[{height:50, with:'100%',flexDirection:'row'}, mainStyle.headerContainer]}>
      <TouchableOpacity style={{zIndex: 1, position: 'absolute',textAlign: 'center', top: 0, left: 0, width: 50, height: 50, padding:15}} onPress={() => {
          this.props.openMenu();
        }}>
        <Image style={{width: 20,height: 20, overlayColor: '#696969'}} source={iconMenu}/>
      </TouchableOpacity>
      <Text style={{flex:1, lineHeight: 50, textAlign:'center', color: '#696969', fontSize:20}}>{this.props.title}</Text>
      </View>
    );
  }
}