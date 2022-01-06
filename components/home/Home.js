import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem, Button, SearchBar, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_KEY} from 'react-native-dotenv';

export default class Home extends Component {
  state = {
    search:'',
    data: null,
    name: null,
    puuid: null,
    level: null,
    profileIcon: null,
    riotAPIKey: API_KEY
  };
  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    const { json } = this.state;
    return(
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container} >
      <View style={styles.mainContainer}>
        <View style={styles.bgContainer}>
          <View style={styles.leftContainer} />
          <View style={styles.rightContainer} />
        </View>
        <View style={styles.contentContainer}>
          <Image style={styles.logo} source={require('../img/yasuo.png')} />
        </View>
        <Card borderRadius={40} containerStyle={styles.cardSearch}>
        <Text style={styles.logoMain}>{"DODGE\nLOL"}</Text>
        <View style={{flexDirection:'row'}}>
          <View style={{width: "75%"}}>
            <SearchBar
              placeholder="SummonerName..."
              onChangeText={this.updateSearch}
              value={search}
              style={styles.searchbar}
              containerStyle={styles.searchcontainer}
              inputContainerStyle={{backgroundColor: 'white', underlineColor: 'black'}}
              inputStyle={{backgroundColor: 'white'}}
            />
            <Divider orientation="horizontal" width={2} style={{width: "85%", top: -12, left: '10%'}}/>
            </View>
          <Button
            buttonStyle={{borderRadius: 50, width:66, height:66, fontWeight: "bold", backgroundColor: "#91C9C0"}}
            icon={
              <Icon
                name="arrow-right"
                size={20}
                color="white"
              />
            }
            onPress={() => this.props.navigation.navigate('Profile', {search} )}
          />
          </View>
        </Card>
      </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%'
  },
  bgContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'row'
  },
  leftContainer:{
    width: '100%',
    height: '100%',
    backgroundColor: '#fdc4c3',
  },
  rightContainer:{
    width: '100%',
    height: '100%',
    backgroundColor: '#cbeae5'
  },
  contentContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: 270,
    height: 220,
    position: 'relative',
    top: '10%'
  },
  cardSearch: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    height: '65%',
    width: '100%',
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    borderWidth: 0,
    elevation: 0,
  },
  logoMain: {
    position: 'relative',
    marginTop: '10%',
    left: '5%',
    fontSize: 100,
    fontFamily: "BebasNeue",
    color: '#91C9C0',
    lineHeight: 100,
  },
  searchbar: {
      width: "100%",
      borderWidth:0, //no effect
      shadowColor: 'white', //no effect
    },
  searchcontainer: {
    backgroundColor: 'white',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  }
});
