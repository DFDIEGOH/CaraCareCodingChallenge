/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {searchMovies, displayDetails} from './actions/movies';

class Home extends Component {
  constructor() {
    super();
  }
  state = {
    search: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie Catalog</Text>
        <TextInput
          placeholder="Search..."
          style={styles.searchbox}
          onChangeText={(movie) => this.setState({search: movie})}
          onSubmitEditing={() => this.props.search(this.state.search)}
          value={this.state.search}
        />
        <ScrollView>
          {this.props.movies.map((result: any) => (
            <TouchableHighlight
              key={result.imdbID}
              onPress={() => {
                this.props.display(result.Title);
                this.props.navigation.navigate('Details');
              }}>
              <View style={styles.result}>
                <Image
                  source={{uri: result.Poster}}
                  style={{width: '100%', height: 300}}
                  resizeMode="cover"
                />
                <Text style={styles.title}>{result.Title}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  searchbox: {
    backgroundColor: '#fff',
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 8,
    width: '90%',
  },
});

const mapStatetoProps = (state: any) => {
  return {
    movies: state.movieReducer.results,
  };
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    search: (searchParam: any) => dispatch(searchMovies(searchParam)),
    display: (title: any) => dispatch(displayDetails(title)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
