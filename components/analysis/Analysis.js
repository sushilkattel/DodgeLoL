import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, Dimensions, BackHandler, ScrollView } from 'react-native';
import { Card, ListItem, Button, SearchBar, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default class Analysis extends Component {
  state = {
    matchlist: [],
    matchArray: [],
    loading: true
  };

  getMatchList() {
    const { navigation } = this.props;
    const matchlist = navigation.getParam('matchlist', 'default')
    console.warn("ANALYSIS", JSON.stringify(matchlist[0]));
    this.setState({
      matchlist: matchlist,
    })
    this.getMatchCS(matchlist)
  }

  getMatchCS(matchlist) {
    const { navigation } = this.props;
    const {matchArray} = this.state;
    const puuid = navigation.getParam('puuid', 'default')
    console.warn("PUUID ANALYSIS", puuid);
    matchlist.map((u, i) => {
      arrayIndex = GetIndex(puuid)
      cs = matchlist[i]?.info?.participants[arrayIndex]?.totalMinionsKilled
      timeMins = (matchlist[i]?.info?.participants[arrayIndex]?.timePlayed)/60
      csPerMin = (cs / timeMins).toFixed(2)
      matchArray.push(parseFloat(csPerMin))
      function GetIndex(puuid) {
        return matchlist[i]?.metadata?.participants?.findIndex(obj => obj === puuid);
      }
    })
    this.setState({
      matchArray: matchArray,
      loading: false
    })
    console.warn("ANALYSIS2", matchArray);

  }

  componentDidMount() {
    this.getMatchList()
}

  render() {
    const screenWidth = Dimensions.get("window").width - 20;
    const chartConfig = {
      backgroundGradientFrom: "#91C9C0",
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#91C9C0",
      backgroundGradientToOpacity: 1,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 1,
      barPercentage: 0.01,
      useShadowColorFromDataset: false,
      propsForLabels: {fontSize: 20, fontFamily: "BebasNeue"},
      propsForHorizontalLabels: {fontSize: 20, left: -10}
    };
    const {matchlist} = this.state;
    const {matchArray} = this.state;
    const {loading} = this.state;
    const data = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          data: matchArray,
          color: (opacity = 1) => `rgba(236, 86, 225, ${opacity})`,
          strokeWidth: 2
        }
      ],
      legend: ["CS Per Minute"]
    };
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.elements}>
            <Button
              buttonStyle={{borderRadius: 50, width:40, height:40, fontWeight: "bold", backgroundColor: "#91C9C0"}}
              icon={
                <Icon
                  name="arrow-left"
                  size={15}
                  color="white"
                />
              }
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Text style={styles.titleMain}>Data Analytics</Text>
            <Divider orientation="horizontal" width={2} style={{width: "75%", top: -12}}/>
            <Text style={styles.title}>Average CS per minute <Text style={{fontSize: 20}}>{'\n'}in recent games</Text></Text>
            {loading ? (
            <Text>Loading...</Text>
          ):
            <LineChart
              data={data}
              width={screenWidth}
              height={256}
              chartConfig={chartConfig}
              bezier
              style={{
                  marginVertical: 2,
                  borderRadius: 16,
              }}
              />
            }
            </View>
          </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignSelf: 'baseline',
    left: '2%'
  },
  elements: {
    alignItems: 'flex-start',
    marginTop: '10%'
  },
  titleMain: {
    fontFamily: "BebasNeue",
    fontSize: 60,
    color: "#CECECE"
  },
  title: {
    fontFamily: "BebasNeue",
    fontSize: 40,
    color: "#FFA57B"
  }
});
