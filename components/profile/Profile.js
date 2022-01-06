import React, {Component, useEffect} from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, SearchBar, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileSummoner from './ProfileSummoner';
import ProfileRanked from './ProfileRanked';
import ProfileMatchList from './ProfileMatchList';
import Loading from '../loading/Loading'
import Error from '../error/Error'
import {API_KEY} from 'react-native-dotenv';

export default class Profile extends Component {
  state = {
    matchlist: [],
    matchData: [],
    count: 0,
    isNotLoading: false,
    name: null,
    level: null,
    icon: null,
    id: null,
    puuid: null,
    matchjson: {},
    riotAPI: API_KEY,
    requestErrors: false
  };

  fetchSummonerProfileInformation(summonerName, region) {
    const { riotAPI } = this.state
  fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riotAPI}`
  )
  .then(res => res.json())
    .then(json => {
      console.log(json);
      console.log(json.puuid);
      this.setState({
          name: json.name,
          level: json.summonerLevel,
          icon: json.profileIconId,
          id: json.id,
          puuid: json.puuid
      })
    const { id, puuid } = this.state
    this.fetchSummonerRankedInformation(this.state.id, 'NA1')
    this.fetchSummonerMatchlist(puuid)
    })
    .catch(error => {
      this.setState({
        error: 'Error Getting API',
        requestErrors: true
      })
    });
    console.warn("YIKES ERROR");
    this.setState({ count: this.state.count + 1 })
  }
  fetchSummonerMatchlist(puuid) {
    const { riotAPI } = this.state
  this.setState({ count: this.state.count + 1 })
  fetch(
    `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${riotAPI}`
  )
  .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
          matchlist: json
      })
      console.warn(json[0])
      const requests = json.map(matchId => this.fetchSummonerMatchData(matchId));
      console.warn('REQUESTS', requests)
      Promise.all(requests.map((request) => {
        return fetch(request).then((response) => {
          return response.json();
        }).then((data) => {
          return data;
        });
      })).then((values) => {
        console.warn('values', values);
        this.setState({
          isNotLoading: true,
          matchData: values
        })

      })
      })
      const { id } = this.state
    .catch(error => {
      this.setState({
        error: 'Error Getting API'
      })
    });
  }
  fetchSummonerMatchData(matchListJson) {
    const { riotAPI } = this.state
    return (
      `https://americas.api.riotgames.com/lol/match/v5/matches/${matchListJson}?api_key=${riotAPI}`
    )
    }
  fetchSummonerRankedInformation(id, region) {
    const { riotAPI } = this.state
  fetch(
    `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}/?api_key=${riotAPI}`
  )
  .then(res => res.json())
    .then(json => {
      console.log(json);
      if (json[0].queueType == "RANKED_SOLO_5x5"){
        this.setState({
            sTier: json[0].tier,
            sRank: json[0].rank,
            sLP: json[0].leaguePoints,
            sWin: json[0].wins,
            sLoss: json[0].losses,
            fTier: json[1].tier,
            fRank: json[1].rank,
            fLP: json[1].leaguePoints,
            fWin: json[1].wins,
            fLoss: json[1].losses
        })
      }
      else {
      this.setState({
          sTier: json[1].tier,
          sRank: json[1].rank,
          sLP: json[1].leaguePoints,
          sWin: json[1].wins,
          sLoss: json[1].losses,
          fTier: json[0].tier,
          fRank: json[0].rank,
          fLP: json[0].leaguePoints,
          fWin: json[0].wins,
          fLoss: json[0].losses
      })
    }
    })
    .catch(error => {
      this.setState({
        error: 'Error Getting API'
      })
    });
    this.setState({ count: this.state.count + 1 })
    console.warn(this.state.count);
  }

  componentDidMount() {
    const { count, puuid, id } = this.state;
    const { navigation } = this.props;
    const search = navigation.getParam('search', 'default')
    this.fetchSummonerProfileInformation(search, 'NA1')
  }
  render() {
    const { navigation } = this.props;
    const search = navigation.getParam('search', 'default')
    const { name, level, icon, sTier, sRank, sLP, sWin, sLoss, fTier, fRank, fLP, fWin, fLoss, matchlist, matchData, isNotLoading, requestErrors } = this.state
    console.warn(matchData[0]);
    /* if (this.state.requestErrors == true) {
      return (
        <View><Error /></View>
      );
    } */
    return(
      <View style={styles.container}>
      {isNotLoading ? (
        <ScrollView>
          <ProfileSummoner name={this.state.name} level={this.state.level} icon={this.state.icon} navigation={this.props.navigation}/>
          <ProfileRanked sTier={this.state.sTier} sRank={this.state.sRank} sLP={this.state.sLP} sWin={this.state.sWin} sLoss={this.state.sLoss} fTier={this.state.fTier} fRank={this.state.fRank} fLP={this.state.fLP} fWin={this.state.fWin} fLoss={this.state.fLoss}/>
          <ProfileMatchList matchlist = {this.state.matchData} puuid = {this.state.puuid} count = {this.state.count} navigation={this.props.navigation}/>
          </ScrollView>
      ):
      <View>
        <Loading />
      </View>

    }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  errorContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  searchcontainer: {
    backgroundColor: '#87ceeb',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
searchbar: {
    width: "100%",
    borderWidth:0, //no effect
    shadowColor: 'white', //no effect
  },
buttonContainer: {
  alignItems: 'center',
  margin: 0,
},
buttonStyle: {
  backgroundColor: '#F46F21'
},
});
