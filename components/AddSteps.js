import { Modal, Pressable, StyleSheet, Text, View ,TextInput} from "react-native";
import React, { useState,useEffect } from "react";

export default function AddSteps({ isVisible, onClose ,submitSteps , submit,propsy}) {
    const [stepField,setStepField] = useState(``)
    const [stepAdded,setStepAdded] =useState([])
    const [stateholder,setStateHolder] = useState(false)



    function stepInputHandler(){
        stepAdded.push(stepField)
        submitSteps(stepAdded)
        setStepField(``)
        
    };
   
    function onSubmit(){
      if(stepAdded.length>=1){
        submit()
        setStepAdded([])
        submitSteps(stepAdded)
        setStateHolder(false)
      }else if(stepAdded.length==0){
        setStateHolder(true)
      }
    }

    function closing(){
      onClose()
      setStepField(``)

    }
    
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View className="bg-white" style={styles.stepsContainer}>
        {stateholder ?<Text
          className="text-red-600"
          style={{
            marginVertical: 20,
            marginHorizontal: 40,
            textAlign: "center",
          }}
        >
          Please Enter At Least One Step
        </Text>: <Text
          className=""
          style={{
            fontWeight: 200,
            marginVertical: 20,
            marginHorizontal: 40,
            textAlign: "center",
          }}
        >
          Don't forget that the key into solving any big problem is chucking it
          down into multiple small ones :)
        </Text>  }
        <Text className="text-center mt-3">Now Let's Break It Down Into Tiny Steps :</Text>
        <View style={styles.input}>
        <TextInput
                    style={styles.inputField}
                    placeholder="Add Your Step..."
                    onChangeText={setStepField}
                    value={stepField}
                    multiline
                    numberOfLines={3}
                />
        </View>
          <View style={styles.submit}>
        <Pressable style={styles.btn} onPress={closing}><Text style={styles.btnText}>Close</Text></Pressable>
        <Pressable style={styles.btn} onPress={stepInputHandler} ><Text style={styles.btnText}>Add Step</Text></Pressable>
        <Pressable style={styles.btn} onPress={onSubmit} ><Text style={styles.btnText}>Submit</Text></Pressable>
        
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  stepsContainer: {
    height: "auto",
    width: "85%",
    borderRadius: 16,
    alignSelf: "center",
    marginTop: 200,
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
},
submit:{
    flexDirection:"row",
    gap:10,
    justifyContent:"center",
    marginVertical:"auto",    
},
inputField:{
    borderWidth:1,
    borderColor: "#ccc",
    marginHorizontal:30,
    borderRadius:16,
    padding:10,
    paddingLeft:15
},
input:{
    marginVertical:30
},
});
