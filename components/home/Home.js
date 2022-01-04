import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';

export default class Home extends Component {
  state = {
    search:'',
    data: null,
    name: null,
    puuid: null,
    level: null,
    profileIcon: null,
    riotAPIKey: 'RGAPI-fa9f3a7a-5d9e-41e0-b27f-6ee2c1388537'
  };
  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    const { json } = this.state;
    return(
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../img/dodgelol.png')} />
        <View style={styles.containerFinal}>
          <SearchBar
            placeholder="SummonerName..."
            onChangeText={this.updateSearch}
            value={search}
            style={styles.searchbar}
            containerStyle={styles.searchcontainer}
            inputContainerStyle={styles.inputContainer}
          />
          <Button
            title="DODGE"
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            //onPress={() => this.props.navigation.navigate('Profile', {search} )}
            />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EAD8CA',
    justifyContent: 'center',
    flex: 1
  },
  searchcontainer: {
    backgroundColor: '#EAD8CA',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchbar: {
    width: "100%",
    borderWidth:0, //no effect
    shadowColor: 'white', //no effect
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginTop: '40%'
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 0,
  },
  containerFinal: {
    marginTop: '-30%',
    flex: 1
  },
  buttonStyle: {
    backgroundColor: '#F46F21'
  },
  inputContainer: {
    backgroundColor: '#4D6181'
  }
});
