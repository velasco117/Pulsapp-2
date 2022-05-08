import { StyleSheet, Dimensions, PixelRatio} from 'react-native';
import mainStyles from '../../theme/mainStyle';

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
    width: Dimensions.get('window').width- 30
  },
  subtitle:{
    margin: 0,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 30,
    fontSize: 18,
  },

  containerDetail:{
    backgroundColor: 'white',
    padding: 16,
    height: 150,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B0BEC5',
  },
  description:{
    fontSize: 14
  },
  containerMap:{
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemFilter: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
  },
  itemFilterInner:{
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#B0BEC5',
  },
  labelFilter: {
    textAlign: 'center',
    lineHeight: 30,
    color: '#B0BEC5'
  },

  containerImage: {
    width:70,
    height:70,
    margin:4,
  }
});
