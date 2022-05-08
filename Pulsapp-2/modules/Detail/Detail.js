import { Text, View } from 'react-native'
import React, { Component } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import moment from 'moment';
import { inject, observer } from "mobx-react";

import Header from "../../libs/Header/header";
//import Header from "../Header/Header";
import styles from "./DetailStyle";
import mainStyles from "../../theme/mainStyle";
import iconMarker from '../../theme/img/icon/placeholder.png';
import userMarker from '../../theme/img/icon/userMarker.png';
import iconElevator from '../../theme/img/icon/icon-elevator.png';
import iconAdd from '../../theme/img/icon/add.png';
import iconTag from '../../theme/img/icon/tags.png';
import iconComment from '../../theme/img/icon/comment.png';
import iconAssign from '../../theme/img/icon/assign.png';
import iconClosed from '../../theme/img/icon/closed.png';
import iconDoing from '../../theme/img/icon/doing.png';

class Detail extends Component {
  render() {
    return (
      <View>
        <Text>Detail</Text>
      </View>
    )
  }
}

const storeInject = inject('user', 'novelties')(observer(Detail));

  export default storeInject;