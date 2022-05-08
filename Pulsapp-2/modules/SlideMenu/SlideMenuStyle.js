import {StyleSheet, Dimensions} from "react-native";

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const SlideMenuStyle = StyleSheet.create({
  gradiant: {
    flex: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: HEIGHT,
    backgroundColor: 'white',
  },
  maintop:{
    flex: 1,
//    backgroundColor: 'black',
    width: '100%',
  },
  mainTitle: {
    flex: 1,
  },
  maintopimage:{
    flex: 1.5,
//    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintopimage_marco:{
  //    flex: 1,
  //    backgroundColor: 'yellow',
      width: 120,
      height: 120,
  },
  imagemarco: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3e636d',
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden'
  },
  logo:{
     justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 120,
      borderRadius: 60,
  },
  infoView:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
     alignItems: 'center',
  },
  infoView_Name:{
  //  flex: 1,
  //  backgroundColor: 'blue',
    justifyContent: 'center',
     alignItems: 'center',
     marginTop: 10,
  },
  infoView_panic:{
//    flex: 1,
  //  backgroundColor: 'yellow',
    justifyContent: 'center',
     alignItems: 'center',
     marginTop: 0,
  },
  logOut:{
    width: '100%',
    height: 64,
    backgroundColor: '#3e636d',//'rgba(93,122,36,1)',//'#6D171D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineML: {
    lineHeight: 40,
    paddingLeft: 8,
    borderBottomWidth: 1.3,
    borderColor: '#C8C8C8',//'rgba(147,192,47,1)',
    flex: 1
  },
  imageIcon:{
    height: 30,
    width: 30,
    position: 'absolute',
    left: 0,
    top: 10
  },
  imageItemIcon: {width: 24,height: 24, margin: 8},
   viewIconMenu:{
    // backgroundColor: 'gray',
     flexDirection: 'row',
     height: 40,
   },
   viewIconMenuRemision:{
    // backgroundColor: 'gray',
     flexDirection: 'row',
     height: 60,
     alignItems: 'center'
   },
  inputIcon:{
    position: 'absolute',
    top: 12,
    left: 0
  },
  ////////////////////////////////////////////////////// parte de abajo
  mainbottom:{
    flex: 1.5,
    marginTop: 15,
    marginBottom: 15,
  //  backgroundColor: 'blue',
    width: '100%',
  },
  mainbottomContainer: {
    paddingLeft: '10%',
    paddingRight: '10%',
  //  backgroundColor: 'gray',
    width: '100%',
    height: '100%',
  //  bottom: 0
  },
////////////SLIDE MENU TEXTOS ///////////////////
 textName:{
   marginTop: -10,
   color: 'black',
   fontSize: 20,
   textAlign: 'right',
 },
 textBar: {
   color: 'rgba(255,255,255,0.7)',
   fontSize: 15,
   textAlign: 'center',
   bottom: 0,
 },
 textNumber: {
   color: 'white',//'rgba(0,0,0,0.7)',
   fontSize: 30,
   textAlign: 'center'
 },
 textInfoLeft: {
   color: 'rgba(255,255,255,0.7)',
   fontSize: 15,
   textAlign: 'left',
 //  top: 0,
 },
 textInfoRight: {
   color: 'rgba(255,255,255,0.7)',
   fontSize: 15,
   textAlign: 'right',
//    bottom: 0,
 },
 textMenuItems: {
   color: 'black',
   fontSize: 15,
   textAlign: 'left',
   marginLeft: -5,
   lineHeight: 40
 },
 textMenuItemsRe: {
  color: 'black',
  fontSize: 15,
  textAlign: 'left',
  marginLeft: -5,
  lineHeight: 25
},

});


export default SlideMenuStyle;
