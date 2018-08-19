import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, FlatList } from 'react-native';

import {iOSColors, human, iOSUIKit, systemWeights} from 'react-native-typography';

import PTRView from 'react-native-pull-to-refresh';

import { LinearGradient } from 'expo';

export default class App extends Component {
  _refresh() {
    return new Promise((resolve) => {
      setTimeout(()=>{resolve()}, 2000)
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.headerStyle}>
      <View>
            <Text style={styles.date}>MONDAY, 27 NOVEMBER</Text>
            <Text style={iOSUIKit.largeTitleEmphasized}>Hi Samonthony!</Text>
      </View>
      </View>
      <PTRView onRefresh={this._refresh}>
        <View style={styles.cardContainer}>
          <FlatList
          data={[
            {key: 'a', cl: 'Science', room: 'Lab 1'},
            {key: 'b', cl: 'Science', room: 'Lab 1'}, 
            {key: 'c', cl: 'Science', room: 'Lab 1'}, 
            {key: 'd', cl: 'Science', room: 'Lab 1'}, 
            {key: 'e', cl: 'Science', room: 'Lab 1'}, 
            {key: 'f', cl: 'Science', room: 'Lab 1'}
          ]}
          renderItem={({item}) => <LinearGradient locations={[0, 1.0]} colors={['#ff8181', '#ff4949']} style={styles.card}><View>

          <Text style={[human.title1White, styles.cardText, systemWeights.bold]}>{item.cl}</Text>
          <Text style={[human.title3White, styles.cardText]}>{item.room}</Text>

          </View></LinearGradient>
        }/>

        </View>
      </PTRView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 48,
    flex: 1,
    backgroundColor: iOSColors.white,
  },
  date: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: iOSColors.gray
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 16,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: iOSColors.customGray,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: iOSColors.white,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  card: {
    height: 90,
    backgroundColor: '#ff4949',
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 7,
  },
  cardText: {
    padding: 5,
  },

})

AppRegistry.registerComponent('App', () => App)