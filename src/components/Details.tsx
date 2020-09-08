/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements/';
import styles from '../styles/Details';

//DETAILS SCREEN
class Details extends Component {
  render() {
    let result = this.props.selected;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.detailsTitle}>{result.Title}</Text>

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
              <Text style={styles.detailsFont}>Genre:</Text> {result.Genre}
            </Text>
            <Text style={styles.detailsSubInfo}>
              <Text style={styles.detailsFont}>Director:</Text>
              {result.Director}
            </Text>
            <Text style={styles.detailsSubInfo}>
              <Text style={styles.detailsFont}>Starring:</Text>
              {result.Actors}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStatetoProps = (state: any) => {
  return {
    selected: state.movieReducer.selected,
  };
};

export default connect(mapStatetoProps)(Details);
