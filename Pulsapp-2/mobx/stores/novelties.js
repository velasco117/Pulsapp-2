// importing observables and decorate
import { makeObservable, observable, action, makeAutoObservable, computed} from 'mobx';
//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { toJS } from "mobx";
//import deferred from 'deferred';
import ErrorController2 from '../../modules/ErrorHistory/ErrorController2';
import {
  ToastAndroid,
} from 'react-native';


class Store {
  novelty = [];
  onProgress = false;
  errors = [];
  errorsDataN = [];

  constructor() {
    this.loadErrors();
    this.getDataNoveltiesFromStorage();
    makeObservable(this, {
      novelty: observable,
      setNovelties: action,
      getNoveltyByUser: action,
      changeStateNovelty: action,
      removeNovelty: action,
      onProgress: observable,

      delateError: action,
      saveErrorsFromAdmin: action,
      errors: observable,
      //errors: persist,
      saveError: action,
      getError: action,
      saveErrorAsync: action,
      saveErrors: action,
      loadErrors: action
    }); 
  }

   /*@description
    el metodo getDataStorageEnovelty esta encargado obtener los errores del storage 
  */
  getDataStorageEnovelty = async () =>{
    debugger;
    let key = 'errors';
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.errorsDataN = JSON.parse(value);
      }
    } catch (error) {
      ToastAndroid.show('Error obteniendo llave ' + key, ToastAndroid.SHORT);
    }
  }

  /*@description
    el metodo saveDataStorageEnovelty esta encargado de guardar los errores mediante comandos 
  */
  saveDataStorageEnovelty = async (data) =>{
    let key = 'errors';
    try {
      await AsyncStorage.setItem(key, data);
      console.log('dato agregado');
    } catch (error) {
      ToastAndroid.show('Error guardando ' + key, ToastAndroid.SHORT);
    }
  }

  /*@description
    el metodo execService esta encargado obtener los datos que envia el usuario como mediador 
  */
  execService = (token, serviceArray, callback) => {
    debugger;
    this.errors.push(serviceArray);
    let errors = toJS(this.errors);
    this.removeErros();
    this.execError(errors, token, callback);
  };

  /*@description
    el metodo saveAllErrors esta encargado de guardar los datos en total al storage si no hay conexion
  */
  saveAllErrors = async (data) => {
    let key = 'errors';
    try {
      await AsyncStorage.setItem(key, JSON.stringify(this.errors));
    } catch (error) {
      ToastAndroid.show('Error guardando ' + key, ToastAndroid.SHORT);
    }
  };

  /*@description
     el metodo saveErrors esta encargado de guardar los datos al storage si no hay conexion 
  */
  saveErrors = async (data) => {
    let key = 'errors';
    let a = toJS(this.errors);
    this.errors.push(data);
    try {
      await AsyncStorage.setItem(key, JSON.stringify(this.errors));
    } catch (error) {
      ToastAndroid.show('Error guardando ' + key, ToastAndroid.SHORT);
    }
  };

  /*@description
    el metodo loadErrors esta encargado de cargar los datos del storage
  */
  loadErrors = async () => {
    let key = 'errors';
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.errors = JSON.parse(value);
      }
    } catch (error) {
      ToastAndroid.show('Error obteniendo llave ' + key, ToastAndroid.SHORT);
    }
  };

 /*@description
    el metodo saveErrorsFromAdmin esta encargado de guardar los datos enviados por el administrador
  */
  saveErrorsFromAdmin = (value) => {
    if (value !== null) {
      this.errors = JSON.parse(value);
    }
    ToastAndroid.show('Se ha editado la información de las novedades por parte del administrador', ToastAndroid.SHORT);
  };

  /*@description
    el metodo removeErrors esta encargado de remover los datos del storage 
  */
  removeErros = async () => {
    let key = 'errors';
    try {
        this.errors = [];
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
  };

  /*@description
    el metodo execErrors esta encargado de cargar los datos el usuario envia 
  */
  execError = (errors, token, callback) => {
    debugger;
    let currentArrayError = errors.shift();
    if(currentArrayError){
      let errorController = new ErrorController2(this.saveErrors, currentArrayError, function(errors, token, callback, flag){
        if(flag){
          this.execError(errors, token, callback);
        } else {
          let errorsTemp = toJS(this.errors);
          this.errors = errorsTemp.concat(errors);
          this.saveAllErrors();
          callback(false);
        }
      }.bind(this, errors, token, callback));
      errorController.execCurrentService();
    } else {
      callback(true);
      //this.getN(token);
    }
  };
  
  /*@description
    el metodo getN esta encargado de obtener las novedades del servidor
  */
  getN = (token) => {
    axios(global.url + 'getNovelties/?state=User', {
      method: 'get',
      timeout: 5000,
      headers: {
        Authorization: token,
      },
    })
    .then(
      function(response) {
        let data = JSON.parse(response.data.response);
        this.setNovelties(data);
        this.setNoveltiesToStorate(response.data.response);
        this.onProgress = false;
      }.bind(this),
    )
    .catch(function() {
      ToastAndroid.show('Error obteniendo las novedades', ToastAndroid.SHORT);
    }.bind(this));
  };

  /*@description
    el metodo getNoveltyByUser esta encargado de obtener los datos dependiendo del usuario
  */
  getNoveltyByUser = (token) => {
    this.onProgress = true;
    let errors = toJS(this.errors);
    if(errors.length > 0){
      this.removeErros();
      this.execError(errors, token, this.getN.bind(this, token));
    } else {
      this.getN(token);
    }

  };

  /*@description
    el metodo setNoveltiesToStorate esta encargado de guardar las novedades el usuario envia 
  */
  setNoveltiesToStorate = async (data) => {
    let key = 'novelties';
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      ToastAndroid.show('Error guardando ' + key, ToastAndroid.SHORT);
    }
  };

  /*@description
    el metodo getDataNoveltiesFromStorage esta encargado de obtener las novedades del storage
  */
  getDataNoveltiesFromStorage = async () => {
    let key = 'novelties';
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.novelty = JSON.parse(value);
      }
    } catch (error) {
      ToastAndroid.show('Error obteniendo llave ' + key, ToastAndroid.SHORT);
    }
  };

  /*@description
    el metodo removeNovelty esta encargado de remover el id de la novedad
  */
  removeNovelty = id => {
    const index = this.novelty.findIndex(novelty => novelty.id === id);
    this.novelty.splice(index, 1);
  };

  /*@description
    el metodo changeStateNovelty esta encargado de cargar el estado de las novedades
  */
  changeStateNovelty = (id, value) => {
    const oldNovelty = this.novelty.find(novelty => novelty.id === id);
    oldNovelty.group = value;
  };

  /*@description
    el metodo setNoveties esta encargado de asignar los datos al this.novelty
  */
  setNovelties = data => {
    this.novelty = data;

  };
  
  /*@description
    el metodo saveError esta encargado de agregar el listado de novedades al this.errors
  */
  saveError = list => {
    console.log(list);
    this.errors.push(list);
  };

  /*@description
    el metodo saveErrorAsync esta encargado de guardar el listado al storage
  */
  saveErrorAsync = list => {
    try {
      console.log('saveErrorAsync');
      var json = JSON.stringify(list);
      console.log(json);
      let key = 'errors';
      //await AsyncStorage.setItem(key, json);
      AsyncStorage.setItem(key, json);
      console.log('key: ' + key + ' data: ' + json);
    } catch (error) {
      ToastAndroid.show('Error guardando ' + key, ToastAndroid.SHORT);
    }
  };

  /*@description
    el metodo getError esta encargado de obtener los errores del storage
  */
  getError = async () => {
    try {
      const value = await AsyncStorage.getItem('errors');
      if (value !== null) {
        //ToastAndroid.show(value, ToastAndroid.SHORT);
        var data = JSON.parse(value);
        console.log(data);
      }

      this.setState({onProgress: false});
    } catch (error) {
      ToastAndroid.show('Error obteniendo llave ' + key, ToastAndroid.SHORT);
    }
  };

  /*@description
    el metodo deleteErros esta encargado de borrar
  */
  delateError = () => {
    this.errors = [];
  };

  get numReports() {
    return this.reports.length;
  }


}

// another way to decorate variables with observable
/* makeObservable(Store, {
  novelty: observable,
  setNovelties: action,
  getNoveltyByUser: action,
  changeStateNovelty: action,
  removeNovelty: action,
  onProgress: observable,

  delateError: action,
  saveErrorsFromAdmin: action,
  errors: observable,
  //errors: persist,
  saveError: action,
  getError: action,
  saveErrorAsync: action,
  saveErrors: action,
  loadErrors: action
}); */


export default new Store();
