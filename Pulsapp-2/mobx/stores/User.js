// importing observables and decorate
import {makeObservable, observable, action} from 'mobx';
//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class User {
  constructor(){
    makeObservable(this, {
      token: observable,
      cc: observable,
      name: observable,
      email: observable,
      nameComplete: observable,
      image: observable,
      setToken: action,
      setCC: action,
      setName: action,
      getDataUser: action,
      setDataUser: action,
    });
  }
  token = '';
  cc = '';
  name = '';
  email = '';
  nameComplete = '';
  image = '';

  setToken = (token) => {

  };
  setCC = (token) => {

  };
  setName = (token) => {

  };

  /*@description
    el metodo getDataUser esta encargado de obtener los datos del usuario del storage
  */
  getDataUser = async (context) => {
    let key = 'loginData';
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        var data = JSON.parse(value);
        this.token = data.token;
        this.cc = data.cc;
        this.nameComplete = data.nameComplete;
        this.email = data.email;
        this.image = data.image;
        if(this.token !== '' && this.cc !== ''){
          context.props.navigation.replace('News', {});
        }
      }
      context.setState({onProgress:false});
    } catch (error) {
      ToastAndroid.show('Error obteniendo llave ' + key, ToastAndroid.SHORT);
      context.setState({onProgress:false});
    }
  };

  /*@description
    el metodo setDataUser esta encargado de guardar los datos del usuario al storage
  */
  setDataUser = async (token, cc, name, email, nameComplete, image) => {
    this.token = token;
    this.cc = cc;
    this.name = name;
    this.email = email;
    this.nameComplete = nameComplete;
    this.image = 'http://ascmillerbsv.eastus.cloudapp.azure.com:8000' +image;
    let key = 'loginData';
    let data = {
      token : this.token,
      cc : this.cc,
      name: this.name,
      email: this.email,
      nameComplete: this.nameComplete,
      image: this.image
    };
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      ToastAndroid.show('Error guardando ' + key, ToastAndroid.SHORT);
    }
  };
}

// another way to decorate variables with observable
/* decorate(User, {
  token: observable,
  cc: observable,
  name: observable,
  email: observable,
  nameComplete: observable,
  image: observable,
  setToken: action,
  setCC: action,
  setName: action,
  getDataUser: action,
  setDataUser: action,
}); */

export default new User();
