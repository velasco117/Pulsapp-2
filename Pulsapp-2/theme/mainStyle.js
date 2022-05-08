import { StyleSheet, Dimensions, PixelRatio} from 'react-native';

const primaryBgColor = '#3e636d';//#00796B
const secondaryBgColor = '#3e636d';//#009688
const colorThree = '#3e636d'

const primaryFontColor = '#fafafa';
const secondaryFontColor = '#fff';
const secondaryBottonColor = '#000'

const colorChipActive = '#26A69A';

const mainStyle = StyleSheet.create({
  textColorActive:{
    color: colorChipActive
  },

  textColor:{
    color: secondaryBottonColor
  },

  textBtn:{
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase'
  },
  primaryFontColor:{
    color: primaryFontColor,
  },
  secondaryFontColor:{
    color: secondaryFontColor,
  },
  btn:{
    height: 36,
    width: 'auto',
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  btnIcon:{
    height: 36,
    width: 'auto',
    paddingLeft: 12,
    paddingRight: 16,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  btnHigh:{
    height: 56,
    width: 'auto',
    paddingHorizontal: 16,
    borderRadius: 28,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  itemChipActive:{
    borderColor: colorChipActive,
    color: colorChipActive,
  },

  btnCircle:{
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },

  primaryBg:{
    backgroundColor: primaryBgColor,
  },
  secondaryBg:{
    backgroundColor: secondaryBgColor,
  },

  input: {
    borderRadius:4,
    borderWidth:1,
    borderColor:'#ced4da',
    paddingHorizontal: 8,
    backgroundColor: 'white',
    paddingLeft: 42,
  },

  text: {
    fontFamily: 'Montserrat,sans-serif'
  },

  uppercase: {
    textTransform: 'uppercase'
  },

  colorLabel: {
    color: '#616161'
  },

  inputLogo: {
    position: 'absolute', 
    width: 40, 
    zIndex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
  },

  headerContainer: {
    backgroundColor: 'white', 
    borderBottomColor: '#3e636d', 
    borderBottomWidth: 3
  },

  containerCards: {
    marginTop: 8,
    paddingRight: 15,
    marginBottom: 40,
    paddingLeft: 15,
    flex: 1,
  }

});
export default mainStyle;
