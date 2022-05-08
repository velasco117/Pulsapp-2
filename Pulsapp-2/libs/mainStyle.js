import { StyleSheet } from 'react-native';



export default StyleSheet.create({

  input: {
    borderRadius:4,
    borderWidth:1,
    borderColor:'#ced4da',
    paddingHorizontal: 8,
    backgroundColor: 'white',
    paddingLeft: 42,
    fontFamily: 'Montserrat,sans-serif'
  },

  logo: {
    width: 56,
    height: 56,
    resizeMode: 'stretch',

  },

  inputLogo: {
    position: 'absolute', 
    width: 40, 
    zIndex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
