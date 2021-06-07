import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default () => {
  return (
    <SafeAreaView style={styles.errorContainer}>
      <Text style={styles.errorText}>Not internet connection !</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    width: '100%',
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  errorText : {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  }
})