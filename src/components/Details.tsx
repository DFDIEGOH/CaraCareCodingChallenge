/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';

class Details extends Component {
  render() {
    let result = this.props.selected;
    return (
      <View>
        <View>
          <Image
            source={{uri: result.Poster}}
            style={{width: '100%', height: 300}}
            resizeMode="cover"
          />
          <Text>{result.Title}</Text>
          <Text>{result.Genre}</Text>
          <Text>{result.Director}</Text>
          <Text>{result.Plot}</Text>
          <Text>{result.Actors}</Text>
          <Text>{result.imdbRating}</Text>
        </View>
      </View>
    );
  }
}

const mapStatetoProps = (state: any) => {
  console.log(state);
  return {
    selected: state.movieReducer.selected,
  };
};

export default connect(mapStatetoProps)(Details);
