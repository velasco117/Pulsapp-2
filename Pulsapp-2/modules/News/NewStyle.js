import { StyleSheet, Dimensions  } from 'react-native';

export default StyleSheet.create({
  containerApp:{
    flex: 1,
    backgroundColor: '#395e71',
  },
  containerNews:{
    marginTop: 8,
    paddingRight: 15,
    marginBottom: 40,
    paddingLeft: 15,
    flex: 1,
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
  band:{
    height: 130,
    width: 5,
    position: 'absolute',
    left: 0,
    top: 0
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
    color: 'black',
    fontSize: 18,
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
  cardSubtitle:{
    margin: 0,
    fontWeight: '600'
  },
  cardDescription:{
    flex: 1,
    overflow: 'hidden'
  },
  containerFilter:{
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  itemFilterInner:{
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#26A69A',
    backgroundColor: '#dee2e6',
    paddingHorizontal: 8,
    shadowColor: '#26A69A',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1.82,
    shadowRadius: 18,
    elevation: 18,
  },

  itemFilterActive:{
    backgroundColor: '#B0BEC5',
    borderColor: '#B0BEC5'
  },


  itemFilter:{
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 4
  },

  iconFilter:{
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 8
  },
  labelFilter:{
    flex: 1,
    lineHeight: 26,
    paddingLeft: 4,
    fontSize: 12
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
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,.3)',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
  },
});
