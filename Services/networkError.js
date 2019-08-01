import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Not internet connection</Text>
    </View>
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