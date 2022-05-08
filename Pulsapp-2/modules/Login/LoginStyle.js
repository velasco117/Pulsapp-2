import { StyleSheet } from 'react-native';
import GLOBALS from "../../libs/constants";

const BARHEIGHT = 100;

export default StyleSheet.create({

  main: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    backgroundColor: GLOBALS.COLOR.BACKGROUN_LOGIN,
    justifyContent: 'center',
    fontFamily: 'Montserrat,sans-serif'
  },

  containerForm: {
    margin: 32,
    borderRadius: 5,
    padding: 32,
    backgroundColor: GLOBALS.COLOR.BACKGROUN_FORM_LOGIN,
    height: 400,
  },

  logo: {
    width: "100%",
    justifyContent: 'center',
  },

  logoImage: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  logoContainerWhite: {
    alignItems: 'center',
    marginBottom: 10
  },

  button: {
    position: "relative",
    top: 100,
    alignItems: 'center',
    backgroundColor: '#f8ffffff',
    height: 50,
    width: 300,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
  },

  Title: {
    fontWeight: 'bold',
    fontSize: 24
  },

  copyRightContainer: {
    position:'absolute',
    textAlign: 'center',
    width: '100%',
    bottom: 8,
  },

  copyRightItem: {
    color:'white', 
    textAlign: 'center'
  }

});
