import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { useCallback, useState,useEffect } from "react";
import StartingButton from "./components/StartingButton";
import ModalInput from "./components/ModalInput";
import AddSteps from "./components/AddSteps";
import Step from "./components/Step";
import ArrayNotEmpty from "./components/ArrayNotEmpty";
import {nanoid} from "nanoid"


// created steps after first one if empty it shows the same items as the its successor /useEffect Problem/
// steps get showed again after deleting the item
// AsyncStorage
// bundling

export default function App() {

  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStepsVisible, setIsStepsVisible] = useState(false);
  const [singleProjectSteps,setSingleProjectSteps] = useState([])
  const [ProjectName,setProjectName] = useState("")
  const [ProjectDescript,setProjectDescript] = useState("")
  const [mainSteps,setMainSteps]=useState([])
  const [exampleArray,setExampleArray] = useState([])
  const [selectedId, setSelectedId] = useState();
  const [holder,setHolder] = useState([])


  function addInfo(){
    const holder = {
      proName : ProjectName,
      proDesc : ProjectDescript,
      arrayOfSteps : mainSteps,
      id: Math.random()* 12312412
    }
    exampleArray.push(holder)
    setIsStepsVisible(false)

  }


  
  function setInput() {
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
  }
  function openSteps() {
    setIsModalVisible(false);
    setIsStepsVisible(true);
    
  }

  function closeSteps(){
    setIsStepsVisible(false)
  }
  function deleteStep(id){
    setExampleArray(currentArray => {
      return currentArray.filter((step) => step.id !== id)
    })

  }

 
  return (
    <View className="bg-gray-300" style={styles.container}>
      <Header />
     { exampleArray.length !== 0 ? <ArrayNotEmpty onPress={setInput}/> : <StartingButton onPress={setInput}/> }
      <ModalInput isVisible={isModalVisible} onClose={closeModal} onSteps={openSteps} proDescript={ProjectDescript =>setProjectDescript(ProjectDescript)} proName={ProjectName => setProjectName(ProjectName)}/>
      <AddSteps submitSteps={mainSteps =>setMainSteps(mainSteps)} submit={addInfo} isVisible={isStepsVisible} onClose={closeSteps} />
      <FlatList
        scrollEnabled={true}
        style={{marginTop:20}}
        data={exampleArray}
        renderItem={(itemData) => {
          return (
            <Step funDelete={deleteStep} onPress={() => setSelectedId(itemData.item.id)} title={itemData.item.proName} arrayOfSteps={itemData.item.arrayOfSteps} id={itemData.item.id} description={itemData.item.proDesc} />
          )
        }}
        keyExtractor={itemData =>itemData.id}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // fontFamily: "Poppins-Regular",
    flex: 1,
  },
});
// funAddStep={addStepHandler}