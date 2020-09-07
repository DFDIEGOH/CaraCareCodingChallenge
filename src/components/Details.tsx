/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements/';

class Details extends Component {
  render() {
    let result = this.props.selected;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.title}>
            <Text style={styles.detailsTitle}>{result.Title}</Text>
          </View>
          <Image
            source={{uri: result.Poster}}
            style={styles.detailsImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.detailsInfo}>
          <View style={styles.detailsRating}>
            <Icon name="star" type="font-awesome" color="yellow" />
            <Text style={styles.detailsRatingTitle}>{result.imdbRating} </Text>
          </View>
          <Text style={styles.detailsPlot}>{result.Plot}</Text>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.detailsSubInfo}>
              <Text style={{fontWeight: 'bold'}}>Genre:</Text> {result.Genre}
            </Text>
            <Text style={styles.detailsSubInfo}>
              <Text style={{fontWeight: 'bold'}}>Director:</Text>
              {result.Director}
            </Text>
            <Text style={styles.detailsSubInfo}>
              <Text style={{fontWeight: 'bold'}}>Starring:</Text>
              {result.Actors}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  title: {paddingLeft: 5, paddingRight: 5},
});

const mapStatetoProps = (state: any) => {
  return {
    selected: state.movieReducer.selected,
  };
};

export default connect(mapStatetoProps)(Details);
