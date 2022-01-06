import React, {Component, useEffect} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileMatchList = ({ matchlist, puuid, count, navigation }) => {
  var matchlist: null
  var puuid: null
  var data = JSON.stringify(matchlist[0])
  var setWinColor = '#FFF4FE'
  function DataUpdate() {
    if (data != null) {
      data = JSON.stringify(matchlist[0].metadata.matchId)
        return(
          <View style={styles.container}>
            <Text style={{fontSize: 40, fontFamily: "BebasNeue", color: "#CECECE", marginTop: "5%", left: "3%"}}>MATCH HISTORY <Button titleStyle={{fontFamily: "BebasNeue"}} buttonStyle={{backgroundColor: "#EC56E1", alignSelf: "flex-end", borderRadius: 10}} title="Analysis" onPress={() => navigation.navigate('Analysis', {matchlist, puuid})}/></Text>
              {
                matchlist.map((u, i) => {
                    arrayIndex = GetIndex(puuid)
                    console.warn('MATCHLIST', matchlist[i]);
                    user = matchlist[i]?.info?.participants[arrayIndex]?.summonerName
                    champion = matchlist[i]?.info.participants[arrayIndex]?.championName
                    puuidCheck = matchlist[i]?.info.participants[arrayIndex]?.puuid
                    kills = matchlist[i]?.info?.participants[arrayIndex]?.kills
                    deaths = matchlist[i]?.info?.participants[arrayIndex]?.deaths
                    assists = matchlist[i]?.info?.participants[arrayIndex]?.assists
                    kda = (kills + assists) / deaths
                    level = matchlist[i]?.info?.participants[arrayIndex]?.champLevel
                    cs = matchlist[i]?.info?.participants[arrayIndex]?.totalMinionsKilled
                    timeMins = (matchlist[i]?.info?.participants[arrayIndex]?.timePlayed)/60
                    lane = matchlist[i]?.info?.participants[arrayIndex]?.lane
                    win = matchlist[i]?.info?.participants[arrayIndex]?.win
                    /*if (win == true) {
                      setWinColor = '#FFF4FE'
                    }
                    if (win == false) {
                      setWinColor = '#FFF4FE'
                    } */
                    function GetIndex(puuid) {
                      return matchlist[i]?.metadata?.participants?.findIndex(obj => obj === puuid);
                  }

                  return (
                    <View key={i} style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('MatchResults', matchlist[i])}>
                      <Card borderRadius={40} style={styles.matchlistCard} containerStyle={styles.containerMatch}>
                        <View style={styles.matchlistCard}>
                          <View style={styles.wrap}>
                            <Image
                                resizeMode = 'cover'
                                source={{ uri: `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/${champion}.png` }}
                                style={{width: 50, height: 50, alignSelf: 'flex-start', borderRadius: 25}}
                              />
                              </View>
                              <Text style={{textAlign: 'left', fontSize:20, left: "-60%", fontFamily: "BebasNeue", color:"#EC56E1"}}>{champion}{'\n'}<Text style={{fontSize:14, fontFamily: "SourceSansPro-regular", color:"#7E7E7E"}}>lvl {level}</Text></Text>
                            <Text style={{textAlign: 'center', fontSize:22, left: "-60%", fontFamily: "BebasNeue", color:"#EC56E1"}}>{kills}/{deaths}/{assists}{'\n'}<Text style={{fontSize: 14, fontFamily: "SourceSansPro-regular", color:"#7E7E7E"}}>{kda.toFixed(2)} KDA</Text></Text>
                            <Text style={{textAlign: 'center', fontSize:20, left: "-60%", fontFamily: "BebasNeue", color:"#EC56E1"}}>{cs} CS{'\n'}<Text style={{fontSize:14, fontFamily: "SourceSansPro-regular", color:"#7E7E7E"}}>({(cs / timeMins).toFixed(2)})</Text></Text>
                          </View>
                      </Card>
                      </TouchableOpacity>
                      </View>
                    );
                  })
                }
            </View>
        );
    } else {
        return(
          <View style={styles.container}>
          <View style={{marginTop: '10%'}}>
            <Card borderRadius={10}>
              <Card.Title style={{fontSize: 40, color: '#4D6181'}}>Match History</Card.Title>
              <Text>Loading...</Text>
            </Card>
          </View>
          </View>
        );
    }
  }
  return(
    <View>{DataUpdate()}</View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    margin: 0,
    fontFamily: "SourceSansPro-regular"
  },
  matchlistCard: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  wrap: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  containerMatch: {
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    borderWidth: 0,
    elevation: 0,
    backgroundColor: '#FFF4FE'
  }
});


export default ProfileMatchList;
