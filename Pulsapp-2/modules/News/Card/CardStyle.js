import { StyleSheet, Dimensions  } from 'react-native';

export default StyleSheet.create({
  band:{
    height: 130,
    width: 5,
    position: 'absolute',
    left: 0,
    top: 0
  },
  iconDoing:{
    backgroundColor: '#28a745',
  },
  iconDone:{
    backgroundColor: '#007bff',
  },
  iconToDo:{
    backgroundColor: '#6c757d'
  },
  containerTop:{
    flex: 1,
    height: 40,
    flexDirection: 'row'
  },
  cardIcon:{
    width: 32,
    height: 32,
    marginRight: 4
  },
  img:{
    width: 32,
    height: 32
  },
  cardTitle:{
    color: '#696969',
    fontSize: 18,
    flex: 1,
    margin: 0,
    lineHeight: 32
  },
  cardTime:{
    width: 100,
    color: '#696969',
    fontSize: 12,
    fontWeight: '600'
  },
  time:{
    textAlign: 'right',
    color: '#696969'
  },
  date:{
    textAlign: 'right',
    color: '#696969'
  },
  cardSubtitle:{
    margin: 0,
    fontWeight: 'bold',
    textAlign: 'left',
    overflow: 'hidden',
    lineHeight: 30,
    fontSize: 14,
    color: '#696969'
  },
  cardDescription:{
    flex: 1,
    overflow: 'hidden',
    fontWeight: '400',
    fontSize: 12,
    color: '#696969',
  },
  cardContainer:{
    borderRadius: 4,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 22,
    height: 130,
    marginBottom: 8,
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  done:{

  },
  containerCard: {
    height: 220,
    width: 300,
    padding: 8,
    overflow: 'hidden', 
    backgroundColor: '#fff',
  },
  containerInnerCard: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  containerTop: {
    display: 'flex',
    flexDirection: 'row'
  },
  containerLeft: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    overflow: 'hidden',
},


containerRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
},

barColor: {
  backgroundColor:'red' ,
  width: 4,
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
},

containerNameCompany: {
  fontSize: 10,
  fontWeight: '800',
  textTransform: 'capitalize',
  lineHeight: 12
},

containerNameDevice: {
  fontSize: 14,
  textTransform: 'capitalize',
  lineHeight: 16
},

containerDescriptionDevice: {
  overflow: 'hidden',
  //display: '',
  lineHeight: 24,
  marginTop: 8,
},

});
