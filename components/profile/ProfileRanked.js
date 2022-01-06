import React, {Component, useEffect} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card, ListItem, Button, SearchBar, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileRanked = ({ sTier, sRank, sLP, sWin, sLoss, fTier, fRank, fLP, fWin, fLoss }) => {
  const rank = {}
  rank["IRON"] = "https://lh3.googleusercontent.com/WUWV7aDtQAHnGzAw4XPBe3hrx_vfytHU4SVTZzdS__29Evg33dI25KZJOqgg7OoXV7Ve62m9rkpo-x1rFTo5E8dnEildJ7mp5z8VM7ZCfq2NNT7UvYyhmiZUJFhjsyFgtW2JLJo6Rw=w2400";
  rank["BRONZE"] = "https://lh3.googleusercontent.com/sE3cWKDOIpTF26AfHsi6KRnZn1bkBY0-pXI-3vc-7geQ95W918j6LICKXo-9by4E8va-ZpJ99u2ltMMvEDF32_gno31qJuudePp8CZYkQFlxLi-YFcvG3OjzCKHi3SOfTq-JeVSqZg=w2400";
  rank["SILVER"] = "https://lh3.googleusercontent.com/-nCGX7CJBFEg-jWr5Hi4MmJq3Z2MWLm7RRNkOIfUgo2zbnta9vFVmUsXoNFr4eqVyHiY4l2hrRSThEIqRjaVa1RcuZKgfyVu_anzZe6A1gPu0ewBMZf75WlNp3yaLOEK1EZi7HVVSA=w2400";
  rank["GOLD"] = "https://lh3.googleusercontent.com/nOJ7XRdqtbZaiVJQDDoB4_zivrK5JNlE2ggGXBE7_1x-3OpHxx483y_SgLiofgrw4LsWp8MfWK3-09WejMSKEbKnx3ssDSiuFWqpKaNAi23KUG4gt23QzEjYPBLAHy5ooQA9t7Ls_Q=w2400";
  rank["PLATINUM"] = "https://lh3.googleusercontent.com/v2vZH7gJiJnd7l-muGcciB-VVmeSW7mkqSsett4ekLiIdf1T84B2VG-Cg6iE9RcW-YJ-2Mh8ITtcegXFokj00F5WDXJD64gKu702nqBylUFDNkrNLuMuoAx6jclp4GjUubOkeOPKEg=w2400";
  rank["DIAMOND"] = "https://lh3.googleusercontent.com/DuwXw7OvSMg-SQBuaC8p46iRqMQt5_DkUcZ2hvu4WTT-M2CNHbWVtn_3MLq89pSDJMq1-NNSHKBlA3NBJeVvlrfbvxxtRU6_SY9Me9y10gIHniicqGxqcFbUX-_0-oAU3ZlAujKNDw=w2400";
  rank["MASTER"] = "https://lh3.googleusercontent.com/3h6T_WzUqZyrMwjQ1zZZ08VUnVeQgPeUWB4pV7pbY2ispGVVqdfOPUuOgwICoI-5a1AlQUMlZxAmhRIMjpo1vQLkANmYmZ6jw2aPkrESyzKujtXUssFrkmzTkaiBqHUxJi0I4lMuhQ=w2400";
  rank["GRANDMASTER"] = "https://lh3.googleusercontent.com/mvESRBU91R9lBF_pPjotVt4IW00UT2bnpzZ2a4cRxcXq8Qg0unF_H8594zbtHQaWT4SfqSDWQOxrJsmNehG553wi0GnqRELWSSwbySfH5nF1LU335Xh9QsiaZaurCqalZs4-lAv-Hg=w2400";
  rank["CHALLENGER"] = "https://lh3.googleusercontent.com/-0Cda9b8O1KtYaSGyKi_uwumt77SrKgEcj5Dys8uu6YOpAwA39sGCP66fE8qw28jAN-DiEzSmIkYDQssdphWTQ0dr8b8lhCnzx0qewQZWphp7EE7HJWgQt_5x3-2RXoLWWStCUsBcg=w2400";
  const sWinrate = Math.round((sWin / (sWin+ sLoss)) * 100)
  const fWinrate = Math.round((fWin / (fWin+ fLoss)) * 100)
  return(
    <View style={styles.container}>
      <Card borderRadius={20} containerStyle={styles.rankCard}>
        <Text style={styles.rankedText}>Ranked Solo/Duo</Text>
        <View style={styles.rankedData}>
          <Image
              resizeMode = 'cover'
              source={{ uri: `${rank[sTier]}` }}
              style={{width: 60, height: 60}}
            />
            <View style={{flexDirection: "column"}}>
              <Text style={{paddingLeft: 10, color: "#808080", fontSize: 14, fontFamily: "SourceSansPro-regular"}}>W: {sWin}{"\n"}L: {sLoss}</Text>
              <Divider orientation="horizontal" width={2} style={{width: "95%", left: 10}}/>
              <Text style={{paddingLeft: 10, color: "#808080", fontSize: 14, top: 2, fontFamily: "SourceSansPro-regular"}}>{sWinrate}%</Text>
            </View>
            <Text style={{paddingLeft: "14%", fontSize: 20, fontFamily: "BebasNeue", textAlign: 'center', color: "#808080"}}>{sLP}{"\n"}LP</Text>
          </View>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontFamily: "BebasNeue", fontSize: 32, color: "#FFA57B"}}>{sTier} {sRank}</Text>
      </Card>
      <Card borderRadius={20} containerStyle={styles.rankCard}>
        <Text style={styles.rankedText}>Ranked Flex</Text>
        <View style={styles.rankedData}>
            <Image
                resizeMode = 'cover'
                source={{ uri: `${rank[fTier]}` }}
                style={{width: 60, height: 60}}
              />
          <View style={{flexDirection: "column"}}>
            <Text style={{paddingLeft: 10, color: "#808080", fontSize: 14, fontFamily: "SourceSansPro-regular"}}>W: {fWin}{"\n"}L: {fLoss}</Text>
            <Divider orientation="horizontal" width={2} style={{width: "95%", left: 10}}/>
            <Text style={{paddingLeft: 10, color: "#808080", fontSize: 14, top: 2, fontFamily: "SourceSansPro-regular"}}>{fWinrate}%</Text>
          </View>
          <Text style={{paddingLeft: "14%", fontSize: 20, fontFamily: "BebasNeue", textAlign: 'center', color: "#808080"}}>{fLP}{"\n"}LP</Text>
        </View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontFamily: "BebasNeue", fontSize: 32, color: "#FFA57B"}}>{fTier} {fRank}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: "row",
    marginLeft:"5%",
    marginRight:"5%",
  },
  rankCard: {
    width: "50%",
    marginHorizontal: "2%",
    backgroundColor: "#FFE6DA",
    shadowColor: 'rgba(0,0,0, .2)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    borderWidth: 0,
    elevation: 0
  },
  rankedText: {
    color: "#808080",
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "SourceSansPro-regular"
  },
  rankedData: {
    flexDirection: 'row',
  },
  ranked: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ProfileRanked;
