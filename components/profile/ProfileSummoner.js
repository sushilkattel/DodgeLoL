import React, {Component, useEffect} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card, ListItem, Button, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileSummoner = ({ name, level, icon, navigation }) => {
  return(
    <View style={styles.container}>
      <View style={{marginTop: '10%'}}>
        <Button
          buttonStyle={{borderRadius: 50, width:40, height:40, fontWeight: "bold", backgroundColor: "#91C9C0", left: "50%", marginTop: "5%"}}
          icon={
            <Icon
              name="arrow-left"
              size={15}
              color="white"
            />
          }
          onPress={() => navigation.navigate('Home')}
        />
          <Image
              resizeMode = 'cover'
              source={{ uri: `https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${icon}.png` }}
              style={{width: 120, height: 120, alignSelf: 'center', borderRadius: 60, borderWidth: 2, borderColor: "#91C9C0"}}
            />
          <Text style={{fontSize: 40, color: '#91C9C0', textAlign: 'center', fontFamily: "BebasNeue", marginTop:"5%"}}>{name}</Text>
          <Text style={{marginBottom: 10,fontSize: 20, textAlign: 'center', color: '#91C9C0', top: -5}}>Level: {level}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    margin: 0
  }
});

export default ProfileSummoner;
