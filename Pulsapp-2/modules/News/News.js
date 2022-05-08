import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,
  ScrollView, 
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  PermissionsAndroid,
  BackHandler,
  ToastAndroid,
  Modal,
  TouchableHighlight,
  StyleSheet
 } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import moment from 'moment';
import Push from 'expo-notifications';
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import NetInfo from "@react-native-community/netinfo";
import io from 'socket.io-client'

import styles from './NewStyle';
import mainStyle from '../../theme/mainStyle';
import Header from '../Header/Header';
import iconElevator from '../../theme/img/icon/icon-elevator.png';
import iconMenu from '../../theme/img/icon/menu-abierto.png';
import Card from './Card/Card';

class News extends Component {
  static navigationOptions = {
    title: 'Novedades',
    headerStyle: {marginLeft:32}
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goToLogin = () => {
    let token = '';
    let cc = '';
    let name = '';
    /* this.props.user.setDataUser(token, cc, name);
    this.setState({showGotoLogin:false});
    this.props.navigation.replace('Login', {}); */
  }

  /*@description
    el metodo _onRefresh esta encargado  de actualizar la vista el usuario lo desee 
  */
  _onRefresh = () => {
      /* this.getDataNovelties(); */
  }

  getDataNovelties = () => {
    NetInfo.fetch().then(function(state){
      if(state.isConnected){
        /* this.props.novelties.getNoveltyByUser(this.props.user.token); */
      } else {
        ToastAndroid.show('No hay conexión a internet', ToastAndroid.SHORT);
      }
    }.bind(this));
  }

  componentDidMount(){
    /* this.socket = io(global.urlNode, { forceNode: true });
    this.socket.on('dispacher-to-employee', function(data) {
      if(data.idUser.cc === this.props.user.cc){
        PushNotification.localNotification({
          // iOS and Android properties 
          largeIcon:'',
          invokeApp: true,
          title: `Novedad ASC-${data.novelty.id}`, // (optional)
          message: `${data.novelty.device.company.name}, ${data.novelty.device.name}, ${data.novelty.sumary}`,
        });
        this.getDataNovelties();
      }
    }.bind(this)); */
    debugger;
    /* this.socket.on('get-command', function(data) {
      debugger;
      if(data.idUser === this.props.user.cc){
        if(data.state === 'n'){
          this.socket.emit("send-command", JSON.stringify(this.props.novelties.errors));
        } else {
          if(data.state === 'm'){
            this.socket.emit("send-command", JSON.stringify(this.props.storageMaintenance.errors));
          }
        }
      }
    }.bind(this));

    this.socket.on('set-command', function(data) {
      debugger;
      if(data.idUser === this.props.user.cc){
        if(data.state === 'n'){
          this.props.novelties.saveErrorsFromAdmin(data.data);
        } else {
          if(data.state === 'm'){
            this.props.storageMaintenance.saveErrorsFromAdmin(data.data);
          }
        }
      }
    }.bind(this)); */

    //this.getDataNovelties();
  /*  this.socket.on('get-command', function(data){
     debugger;
      if (data.idUser === this.props.user.cc) {
        if(data.state === 'n'){
          this.socket.emit('send-command', JSON.stringify(this.props.novelties.errors));
          console.log('datos encnotrados', JSON.stringify(this.props.novelties.errors));
        }else{
          if(data.state === 'm'){
            this.socket.emit('send-command', JSON.stringify(this.props.storageMaintenance.errors));
          }
        }
      }
    }.bind(this));

    this.socket.on('set-command', function(data){
      debugger;
      if (data.idUser === this.props.user.cc) {
        if(data.state === 'n'){
          this.props.novelties.saveDataStorageEnovelty(data.data);
          console.log(data.data, 'guardado');
        }else{
          if(data.state === 'm'){
            this.props.storageMaintenance.saveDataStorageEmaintenance(data.data);
          }
        }
      }
    }.bind(this)); */

    /* BackgroundGeolocation.configure({
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 50,
      distanceFilter: 50,
      notificationTitle: 'NoveltyApp tracking',
      notificationText: 'enabled',
      startOnBoot: false,
      debug: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: 50000,
      fastestInterval: 45000,
      activitiesInterval: 60000,
      stopOnStillActivity: false,
    }); */

    BackgroundGeolocation.on('location', (location) => {
      // handle your locations here
      // to perform long running operation on iOS
      // you need to create background task
      BackgroundGeolocation.startTask(taskKey => {
        // execute long running task
        // eg. ajax post location

        this.setState({currentPosition:location});
        var socket = io(global.urlNode, { forceNode: true });
        socket.emit('gps-user', {user:this.props.user.cc, position:location});
        // IMPORTANT: task has to be ended by endTask
        BackgroundGeolocation.endTask(taskKey);
      });
    });
    
    /* BackgroundGeolocation.checkStatus(status => {
      console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
      console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
      console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {
        BackgroundGeolocation.start(); //triggers start on start event
      }
    }) */;

    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid
    );
  }

  componentWillUnmount() {
    // unregister all event listeners
    //BackgroundGeolocation.removeAllListeners();
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid
    );
  }

  handleBackButtonPressAndroid = () => {
    if (!this.props.navigation.isFocused()) {
      // The screen is not focused, so don't do anything
      return false;
    }
    this.setState({showGotoLogin:true});
    return true;

  };

  onPress = (novelty) => {
    /* this.props.navigation.navigate('Detail', {
      novelty: novelty,
    }); */
  }

  /*@description
    el metodo onPressFilter esta encargado de realizar una accion de filtrar las novedades
  */
  onPressFilter = (filter) => {
    if(this.state.filter === filter){
      this.setState({filter:'ALL'});
    } else {
      this.setState({filter:filter});
    }
  }

  /*@description
    el metodo filterByState esta encargado de filtrar el estado de las novedades
  */
  filterByState = (state, obj) => {
    if (obj.group === state) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log(this.props.navigation);
    var showGotoLogin = false
    //const onProgress = this.props.novelties.onProgress;
    //var dataSource = this.props.novelties.novelty;
    var viewFilter = <View style={styles.containerFilter}>
      <TouchableOpacity onPress={() => this.onPressFilter('ToDo')} style={styles.itemFilter}>
        <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
          <View style={[styles.iconFilter, styles.iconToDo]}></View>
          <Text style={styles.labelFilter}>Asignadas</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onPressFilter('Doing')} style={styles.itemFilter}>
        <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
          <View style={[styles.iconFilter, styles.iconDoing]}></View>
          <Text style={styles.labelFilter}>En progreso</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onPressFilter('Done')} style={styles.itemFilter}>
        <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
          <View style={[styles.iconFilter, styles.iconDone]}></View>
          <Text style={styles.labelFilter}>Terminadas</Text>
        </View>
      </TouchableOpacity>
    </View>;
    switch(this.state.filter) {
      case 'ToDo':
      dataSource = dataSource.filter(this.filterByState.bind(this,'Asignado'));
      viewFilter = <View style={styles.containerFilter}>
        <TouchableOpacity onPress={() => this.onPressFilter('ToDo')} style={styles.itemFilter}>
          <View style={styles.itemFilterInner}>
            <View style={[styles.iconFilter, styles.iconToDo]}></View>
            <Text style={styles.labelFilter}>Asignadas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressFilter('Doing')} style={styles.itemFilter}>
          <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
            <View style={[styles.iconFilter, styles.iconDoing]}></View>
            <Text style={styles.labelFilter}>En progreso</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressFilter('Done')} style={styles.itemFilter}>
          <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
            <View style={[styles.iconFilter, styles.iconDone]}></View>
            <Text style={styles.labelFilter}>Terminadas</Text>
          </View>
        </TouchableOpacity>
      </View>;
      break;
      case 'Doing':
      dataSource = dataSource.filter(this.filterByState.bind(this,'En progreso'));
      viewFilter = <View style={styles.containerFilter}>
        <TouchableOpacity onPress={() => this.onPressFilter('ToDo')} style={styles.itemFilter}>
          <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
            <View style={[styles.iconFilter, styles.iconToDo]}></View>
            <Text style={styles.labelFilter}>Asignadas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressFilter('Doing')} style={styles.itemFilter}>
          <View style={styles.itemFilterInner}>
            <View style={[styles.iconFilter, styles.iconDoing]}></View>
            <Text style={styles.labelFilter}>En progreso</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressFilter('Done')} style={styles.itemFilter}>
          <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
            <View style={[styles.iconFilter, styles.iconDone]}></View>
            <Text style={styles.labelFilter}>Terminadas</Text>
          </View>
        </TouchableOpacity>
      </View>;
      break;
      case 'Done':
      dataSource = dataSource.filter(this.filterByState.bind(this,'Validador'));
      viewFilter = <View style={styles.containerFilter}>
        <TouchableOpacity onPress={() => this.onPressFilter('ToDo')} style={styles.itemFilter}>
          <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
            <View style={[styles.iconFilter, styles.iconToDo]}></View>
            <Text style={styles.labelFilter}>Asignadas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressFilter('Doing')} style={styles.itemFilter}>
          <View style={[styles.itemFilterInner, styles.itemFilterActive]}>
            <View style={[styles.iconFilter, styles.iconDoing]}></View>
            <Text style={styles.labelFilter}>En progreso</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressFilter('Done')} style={styles.itemFilter}>
          <View style={styles.itemFilterInner}>
            <View style={[styles.iconFilter, styles.iconDone]}></View>
            <Text style={styles.labelFilter}>Terminadas</Text>
          </View>
        </TouchableOpacity>
      </View>;
      break;
    }
    return (
      <View  style={styles.containerApp}>
        { showGotoLogin 
        ?
          <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => {
              this.setState({showGotoLogin:false});
            }}
            >
              <View style={styles2.centeredView}>
                <View style={styles2.modalView}>
                  <Text style={styles2.modalText}>¿Está seguro que quiere salir?</Text>
                  <View style={{flex:1, flexDirection:'row'}}>
                    <TouchableHighlight
                      style={{ ...styles2.openButton, backgroundColor: "#007bff" }}
                      onPress={() => this.goToLogin()}
                      >
                        <Text style={styles2.textStyle}>Sí</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{ ...styles2.openButton, backgroundColor: "#6c757d" }}
                        onPress={() => {
                          this.setState({showGotoLogin:false});
                        }}
                        >
                          <Text style={styles2.textStyle}>No</Text>
                        </TouchableHighlight>
                      </View>

                    </View>
                  </View>
                </Modal>
                : null
              }
        <LinearGradient
          colors={['#6c973f', 'transparent']}
          style={styles.background}
        />
        <View>
          <Header title='Novedades'  openMenu={this.props.navigation.openDrawer}></Header>
        </View>
        <Text> Newskkkk </Text>
        {/* <FlatList
            refreshing= {onProgress}
            onRefresh={this._onRefresh}
            style={mainStyle.containerCards}
            data={toJS(dataSource)}
            renderItem={({item}) =>
              <Card
                onPress={() => this.onPress(item)}
                pre={'AGN'}
                isNovelty={true}
                cardTitle={item.id}
                cardTime={moment(item.createDate)}
                cardSubtitle={item.device.company.name + ' - ' + item.device.name}
                cardDescription={item.sumary}
                cardType={item.group}
              />
            }
              keyExtractor={item => item.id.toString() }
            /> */}
            {/* viewFilter */}
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 160
  },
  openButton: {
    backgroundColor: "#F194FF",
    padding: 10,
    elevation: 2,
    flex:1,
    marginHorizontal: 8,
    borderRadius: 4,
    height: 40
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const storeInject = inject('novelties')(observer(News));

export default storeInject