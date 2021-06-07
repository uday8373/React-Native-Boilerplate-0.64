import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'


export default function Userlist(props) {

  _renderListItem = (items) => {
    const { item } = items
    return (
      <View style={styles.list_container}>
        <View style={styles.details_container}>
          <View>
            <Image source={{uri: item.avatar}} style={styles.avatar_img} />
          </View>
          <View>
            <Text>{item.first_name} {item.last_name}</Text>
            <Text style={styles.email}> E-mail: {item.email}</Text>
          </View>
        </View>
      </View>
    )
  }

  const emptyList = (
    <View style={styles.empty_data}>
      <Text> No users found ! </Text>
    </View>
  )

  return (
    <>
      <FlatList
        data={props.data}
        keyExtractor={(i) => i.email}
        renderItem={_renderListItem}
        ListEmptyComponent = {emptyList}
        initialNumToRender={2}
      />
    </>
  )
}


const styles = StyleSheet.create({
  list_container: {
    padding: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5,
    marginVertical: 5
  },
  details_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  email: {
    fontSize: 12
  },
  avatar_img: {
    height: 50,
    width: 50
  },
  empty_data: {
    alignSelf: 'center',
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dotted',
    borderColor: '#72b4d0',
    backgroundColor: '#ebf9ff'
  }
})