import { StyleSheet, Text, View ,FlatList,TouchableOpacity, Pressable} from 'react-native'
import React,{useState} from 'react'
import { Feather } from '@expo/vector-icons';

const Step = ({id,title,description,arrayOfSteps,onPress,funDelete}) => {

    const [randomName,setRandomName] = useState(false)

    function BigFunction(){
        setRandomName(prev=>!prev)
        onPress()
    }


  return (
    <Pressable className="bg-gray-50" onPress={BigFunction} style={[styles.StepContainer,randomName ? {height : "auto"} : {height : 100}]} key={id}>
      <Text className="text-green-500" style={{fontSize:24,fontWeight:300,textAlign:"left", paddingLeft:30}}>- {title} -</Text>
        {description.length !== 0 ? <Text className="text-green-400 pt-1 " style={{textAlign:"center",fontWeight:300}}>( {description} )</Text>
        :<Text className="text-green-400 pt-1 " style={{textAlign:"center",fontWeight:300}}>{description}</Text>}
        <Pressable onPress={funDelete.bind(this,id)} style={[styles.deletebtn,randomName ? {top:"60%"} : {top:"70%"}]}>
        <Feather name="trash-2" size={30} color="green" />
        </Pressable>
        {/* <View>
        {arrayMapped}
        </View> */}
        <View style={styles.listContainer}>
            <FlatList
            data={arrayOfSteps}
            style={styles.list}
            renderItem={(itemData) =>{
                return ( <Text style={{paddingVertical:8,fontSize:16,fontWeight:300, borderBottomWidth:0.5,borderBottomColor:"gray",width:"70%",alignSelf:"center"}}>{itemData.item}</Text>)
            }}
            />
        </View>
    </Pressable>
  )
}

export default Step

const styles = StyleSheet.create({
    StepContainer:{
        margin:16,
        marginVertical:6,
        paddingVertical:30,
        borderRadius:12,
        overflow:"hidden",
        
    },
    listContainer:{
        paddingHorizontal:30,
        paddingTop:25
    },
    // list:{
    //     textDecorationStyle:"dashed"
    // },
    deletebtn:{
        position:"absolute",
        right:20,
        padding:10
        // justifyContent:"center"
    }
})