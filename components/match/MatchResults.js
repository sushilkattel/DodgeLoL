import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';

export default class MatchResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.elements}>
          <Card borderRadius={10} containerStyle={{width: Dimensions.get('window').width - 20}}>
            <Text>DUB</Text>
          </Card>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4D6181',
    alignSelf: 'center',
  },
  elements: {
    alignItems: 'center',
    marginTop: '10%'
  }
});
