import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { inject, observer } from "mobx-react";
import axios from 'axios';

class ErrorController2 {
  constructor(saveErrorsFunc, arrayService, callback) {
    this.saveErrorsFunc = saveErrorsFunc;
    this.arrayService = arrayService;
    this.callback = callback;
  }

  /*@description
    el metodo execCurrentService esta encargado de enviar, guardar los datos al servidor 
  */
  execCurrentService() {
    debugger;
    let services = this.arrayService.slice();
    let service = services.shift();  
    console.log(service.params);
    axios(service.request, {
      method: 'post',
      timeout: 3000,
      headers: {
        Authorization: service.token,
        'Content-Type': service.contentType,
      },
      data: service.params,
    })
      .then(
        function(response) {
          if (response.status === 200) {
            this.arrayService = services.slice();
            if (this.arrayService.length > 0) {
              console.log('datos no guardados');
              this.execCurrentService();
            } else {
              ToastAndroid.show(service.SuccessMsn, ToastAndroid.SHORT);
              console.log(service.SuccessMsn)
              this.callback(true);
            }
          }
        }.bind(this),
      )
      //.catch(async err => {
      .catch(function(err) {
        debugger;
        console.log(err);
        ToastAndroid.show(service.ErrorMsn, ToastAndroid.SHORT);
        this.saveErrorsFunc(this.arrayService);
        //this.execCurrentService();
        this.callback(false)
      }.bind(this));
  }

  /*@description
    el metodo storeData esta encargado de guardar los datos al storage si no hay conexion
  */
  storeData = async (data) => {
    try {
      await AsyncStorage.setItem('errors', data);
      console.log("key: " +key+ " data: " +data );
    } catch (error) {
      ToastAndroid.show('Error guardando ' + key, ToastAndroid.SHORT);
    }
  };
}

export default ErrorController2;
