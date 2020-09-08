/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#223343',
    paddingTop: 15,
  },
  detailsPlot: {
    color: '#96b7d4',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
  detailsTitle: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 10,
  },
  detailsImage: {
    width: '65%',
    height: 325,
  },
  detailsInfo: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  detailsRating: {flexDirection: 'row', paddingBottom: 10},
  detailsRatingTitle: {
    color: '#96b7d4',
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  detailsSubContainer: {
    paddingTop: 15,
  },
  detailsSubInfo: {
    fontSize: 13,
    color: '#96b7d4',
    marginTop: 10,
  },

  detailsFont: {
    fontWeight: 'bold',
  },
});
