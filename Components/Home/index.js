import React, {useState, useEffect} from 'react'
import {
    Header,
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
import { View, StyleSheet, StatusBar, SafeAreaView, Text, ScrollView, Button } from 'react-native'
import { connect } from 'react-redux'
import { getUsers } from './../../Actions/userAction'
import  UserList  from './userList'

function Homecontainer (props) {
    const { navigation } = props
    useEffect(() => {
      //Prevent re-calling when props available
      if(!props.userlist.user)
         props.fecthUsers()
    })

    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Header />
              {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )}
              <View style={styles.body}>
              <Button title="Go to profile" onPress={() => navigation.navigate('Profile')}/>
                <View style={styles.sectionContainer}>
                   <UserList data ={props.userlist.user ? props.userlist.user.data : []}/>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      )
}

mapStateToProps = (state) => {
  return {
    userlist: state.userdata
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    fecthUsers: () => {
      dispatch(getUsers())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homecontainer)

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  })