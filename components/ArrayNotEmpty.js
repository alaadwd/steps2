import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const ArrayNotEmpty = ({onPress}) => {
  return (
    <View style={styles.ArrayNotEmpty}>
      <Pressable onPress={onPress}><AntDesign name="plus" size={50} color="green" /></Pressable>
    </View>
  )
}

export default ArrayNotEmpty

const styles = StyleSheet.create({
    ArrayNotEmpty:{
        backgroundColor:"white",
        borderRadius:9999,
        padding:16,
        width:"20%",
        position:"absolute",
        bottom:40,
        right:30,
        zIndex:1
    },
})