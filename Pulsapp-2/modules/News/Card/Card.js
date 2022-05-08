import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import styles from "./CardStyle";
import iconElevator from '../../../theme/img/icon/icon-elevator.png';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var iconType = <View style={[styles.band, styles.iconToDo]}></View>;
    switch(this.props.cardType) {
      case 'Asignado':
        iconType = <View style={[styles.band, styles.iconToDo]}></View>;
      break;
      case 'En progreso':
        iconType = <View style={[styles.band, styles.iconDoing]}></View>;
      break;
      case 'Validador':
        iconType = <View style={[styles.band, styles.iconDone]}></View>;
      break;
    }
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.cardContainer]}>
          {iconType}
        <View style={styles.containerTop}>
          <View style={styles.cardIcon}>
            <Image style={styles.img} source={iconElevator}/>
          </View>
          <Text style={styles.cardTitle}>{this.props.pre}-{this.props.cardTitle}</Text>
          {this.props.isNovelty?(
            <View style={styles.cardTime}>
              <Text style={styles.time}>{this.props.cardTime.format('hh:mm A')}</Text>
              <Text style={styles.date}>{this.props.cardTime.format('D MMM YY')}</Text>
            </View>
          ):(
            <View style={styles.cardTime}>
              <Text style={styles.time}>{this.props.cardTime}</Text>
            </View>
          )}

        </View>
        <Text style={styles.cardSubtitle} numberOfLines={1}>{this.props.cardSubtitle}</Text>
        <Text style={styles.cardDescription}>{this.props.cardDescription}</Text>
      </TouchableOpacity>
    );
  }
}
