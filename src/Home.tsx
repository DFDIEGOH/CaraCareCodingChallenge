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
import {Card} from 'react-native-elements';
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
