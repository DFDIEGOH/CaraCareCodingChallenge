/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    paddingTop: 50,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  homeTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  homeText: {
    color: '#96b7d4',
    fontSize: 25,
    paddingRight: 15,
    paddingLeft: 15,
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  searchbox: {
    color: 'white',
    marginLeft: 50,
    backgroundColor: '#162533',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 8,
    width: '50%',
  },
  result: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
  resultTitle: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 40,
    marginBottom: 10,
  },
  resultSubtitle: {
    color: '#96b7d4',
    fontSize: 13,
    paddingLeft: 40,
  },
  resultType: {
    color: '#96b7d4',
    fontSize: 13,
    paddingLeft: 40,
    marginTop: 10,
  },
});
