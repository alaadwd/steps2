import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

export default function StartingButton({onPress}) {
  return (
    <>
    <View style={styles.StartButton} className="rounded-3xl mt-60">
    <Text style={{color:"#2BAE66FF",fontSize:22,paddingBottom:25}}>Get Started</Text>
      <Pressable onPress={onPress}><AntDesign name="plus" size={60} color="green" /></Pressable>
    </View>
    </>
  )
}
  const styles = StyleSheet.create({
    StartButton:{ 
        backgroundColor:"#FCF6F5FF",
        padding:36,
        width:"50%",
        alignItems:"center",
        alignSelf:"center",
        paddingVertical:52
        // shadowColor: "black",
        // shadowOffset: {width: -8, height: 16},
        // shadowOpacity: 1,
        // shadowRadius: 3,
        // borderRadius:"2rem"
    }
})
