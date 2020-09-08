/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './styles/Home';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {searchMovies, displayDetails} from './actions/movies';

//HOME SCREEN
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
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Movies</Text>
            <TextInput
              placeholder="Search..."
              placeholderTextColor="white"
              style={styles.searchbox}
              onChangeText={(movie) => this.setState({search: movie})}
              onSubmitEditing={() => this.props.search(this.state.search)}
              value={this.state.search}
            />
          </View>
        </View>
        {/*Checks if the user already has search a movie, if not the welcome message will be shown */}
        {this.props.movies.length === 0 ? (
          <View style={styles.homeTextContainer}>
            <Text style={styles.homeText}>
              Welcome to the Movie Catalog APP
            </Text>
          </View>
        ) : (
          <ScrollView>
            {this.props.movies.map((result: any) => (
              <Card
                key={result.imdbID}
                containerStyle={{
                  backgroundColor: '#162533',
                  borderRadius: 10,
                  borderColor: '#162533',
                }}>
                <TouchableHighlight
                  onPress={() => {
                    this.props.display(result.Title);
                    this.props.navigation.navigate('Details');
                  }}>
                  <View style={styles.result}>
                    <Image
                      source={{uri: result.Poster}}
                      style={{width: '30%', height: 125}}
                    />
                    <View style={{flex: 1}}>
                      <Text style={styles.resultTitle}>{result.Title}</Text>
                      <Text style={styles.resultSubtitle}>{result.Year}</Text>
                      {/* Checks the type of the results and it displays it depending on the Type*/}
                      <Text style={styles.resultType}>
                        {typeof (result.Type !== 'undefined')
                          ? result.Type === 'movie'
                            ? 'Movie'
                            : result.Type === 'series'
                            ? 'Series'
                            : ''
                          : ''}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </Card>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

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
