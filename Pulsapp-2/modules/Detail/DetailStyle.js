import { StyleSheet, Dimensions  } from 'react-native';

export default StyleSheet.create({
  containerApp:{
    flex: 1,
  },
  btnBack:{
    height: 42,
    width: 42
  },
  containerTags:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
    maxHeight: 52
  },
  badge:{
    backgroundColor: '#17a2b8',
    height: 24,
    borderRadius: 4,
    paddingHorizontal: 4,
    marginRight: 4,
    marginBottom: 4
  },
  textBadge:{
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    lineHeight: 24,
    textTransform: 'uppercase'
  },
  containerTop:{
    height: 40,
    paddingHorizontal: 0,
    flexDirection: 'row',
  },
  cardIcon:{
    width: 32,
    height: 32,
    marginRight: 4
  },
  img:{
    padding: 4,
    width: 32,
    height: 32
  },
  cardTitle:{
    color: 'black',
    fontSize: 24,
    flex: 1,
    margin: 0,
    lineHeight: 32
  },
  cardTime:{
    width: 100,
    color: 'black',
    fontSize: 12,
    fontWeight: '600'
  },
  time:{
    textAlign: 'right',
  },
  date:{
    textAlign: 'right',
  },
  containerSubTitle:{
    height: 60,
    width: Dimensions.get('window').width - 30,
  },
  subtitle:{
    margin: 0,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 30,
    fontSize: 18,
  },

  containerDetail:{
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
    height: 130,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
  },
  description:{
    fontSize: 14
  },

  label:{
    fontSize: 14,
    color: '#212529',
    fontWeight: '600',
    marginBottom: 8,
  },

  labelLifeCicle:{
    fontSize: 14,
    color: '#212529',
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8,
  },

  containerMap:{
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn:{
    height: 72,
    width: 144,
    backgroundColor: '#28a745',
    borderRadius: 4,
    alignSelf: 'center'
  },
  textBtn:{
    lineHeight: 72,
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  },
  containerLifeCicle:{
    flex: 1,
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ced4da',
  },
  itemTimeLine:{
    position: 'relative',
    height: 90,
  },
  itemTimeLineLine:{
    position: 'absolute',
    width: 1,
    backgroundColor: 'black',
    left: 85,
    height: 90,
    top: 0,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1,
  },
  firtsItem:{
    height: 45,
    top: 45,
  },
  lastItem:{
    height: 45,
    top: 0,
  },
  itemTimeLineDate:{
    height: 36,
    width: 65,
    marginRight: 40,
    marginTop: 28,
    textAlign: 'right',
    color: '#7c7272',
    fontSize: 12,
  },
  itemTime:{
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    color: '#7c7272',
  },
  itemDate:{
  },
  itemTimeLineDetail:{
    flex: 1,
    borderRadius: 4,
    height: 84,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  itemUser:{
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
    backgroundColor: '#ced4da',
    paddingHorizontal: 4,
  },
  itemComment:{
    padding: 4,
  },
  imgTimeLine:{
    height: 24,
    width: 24,
    position: 'absolute',
    left: 73,
    top: 32,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    zIndex: 1,
    borderWidth: 1,
    borderColor: '#c3c3c3',
    backgroundColor: 'white',
  },

});
