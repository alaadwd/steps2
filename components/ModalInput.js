import {Modal, View, Text,StyleSheet, Pressable, TextInput} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 


const ModalInput = ({isVisible,onClose,onSteps,proName,proDescript}) => {

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [stateholder,setStateHolder] = useState(false)

    // function nameHandler(enteredName){
    //     setName(enteredName)
    // }

    function bigCloseFunc(){
        onClose()
        setStateHolder(false)
        setName("")
        setDescription("")
    }
    function addAndGetNames(){
        if(name.length>=1){
            onSteps()
            proName(name)
            proDescript(description)
            setName("")
            setDescription("")
            setStateHolder(false)
        }
            else if(name.length==0){
                setStateHolder(true)
        }
            
    }
  return (
    <Modal visible={isVisible} animationType='fade' transparent={true} focusable={true}>
      <View className="bg-white" style={styles.Modal}>
            <View style={styles.top}>
            <Text style={{fontSize:25 ,marginTop:20,fontWeight:300}}>Create A New Project</Text>
            {/* <AntDesign style={{marginTop:10,}} name="close" size={24} color="gray" /> */}
            </View>
            {stateholder && <Text className=" text-center pt-3 text-red-500">Please Add Project Name</Text> }
            <View style={styles.input}>
                <TextInput
                    className=""
                    style={styles.inputField}
                    placeholder="Your Project's Name..."
                    onChangeText={setName}
                    value={name}
                /> 
                <TextInput
                    className=""
                    style={styles.inputField}
                    placeholder="General Description..."
                    onChangeText={setDescription}
                    value={description}
                    multiline
                    numberOfLines={3}
                />
            </View>
            <View style={styles.submit}>
            <Pressable style={styles.btn} onPress={bigCloseFunc}><Text style={styles.btnText}>Close Menu</Text></Pressable>
            <Pressable style={styles.btn} onPress={addAndGetNames} ><Text style={styles.btnText}>Add Steps</Text></Pressable>
            </View>
      </View>
    </Modal>
  )
}
const styles=StyleSheet.create({
    Modal:{
        height:"auto",
        width:"85%",
        borderRadius:16,
        alignSelf:"center",
        marginTop:200,


    },
    top:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    submit:{
        flexDirection:"row",
        gap:20,
        justifyContent:"center",
        marginVertical:"auto",    
    },
    btn:{
        padding:18,
        borderWidth:1,
        borderColor:"#2BAE66FF",
        borderRadius:16,
        marginBottom:40

    },
    btnText:{
        fontSize:14,
        fontWeight:300
    },
    input:{
        gap:30,
        marginVertical:30
    },
    inputField:{
        borderWidth:1,
        borderColor: "#ccc",
        marginHorizontal:30,
        borderRadius:16,
        padding:10,
        paddingLeft:15
    }
})

export default ModalInput