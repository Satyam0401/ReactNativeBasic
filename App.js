import { View,Text,StyleSheet,Button,Pressable } from "react-native"
import {useState} from "react"
const App = () =>{
  //backgroundColor:"red",
  //flex:1
  //borderWidth:22
  //padding:50,
  //flexDirection:"row"
  const [bgColor,setBgColor] = useState(`rgb(127,0,255)`)
  const onPressHandler=()=>{
const randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
console.log(randomColor)
setBgColor(randomColor)
  }
const onPressHandler2=()=>{
  setBgColor(`rgb(0,0,0)`)
  }
  return <View style={[styles.container,{backgroundColor:bgColor}]}>
   <Pressable onPress = {onPressHandler}><Text style ={styles.text}>Press me</Text></Pressable> 
   <Pressable onPress = {onPressHandler2}><Text style ={styles.text2}>Reset me</Text></Pressable> 

</View>
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:`rgb(127,0,255)`
},
text:{
  backgroundColor:"#FFFFFF",
  padding:20,
  paddingHorizontal:10,
  paddingVertical:10,
  fontSize:20,
  borderRadius:20,
  color:"#000000"
},
text2:{
  backgroundColor:"#FFFFFF",
  marginVertical:20,
  padding:20,
  paddingHorizontal:10,
  paddingVertical:10,
  fontSize:20,
  borderRadius:20,
  color:"#000000"
}
}) 
export default App