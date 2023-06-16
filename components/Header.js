import React from 'react'
import { Text,View ,StyleSheet} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Header = () => {
  return (
    <View style={styles.header_container} className='bg-green-500 justify-center '>
        <Text style={styles.head} className="">Steps <Entypo name="baidu" size={24} color="#FCF6F5FF" /></Text>
        </View>
  )
}
const styles=StyleSheet.create({
    header_container :{
        flexDirection:"row",
        padding:16,
        paddingVertical:24,
        paddingTop:40,
    },
    head:{
        
        fontSize:30,
        letterSpacing:4,
        fontWeight:200,
        color:"#FCF6F5FF",
        // fontFamily:"Poppins-Regular"

    }
})

export default Header