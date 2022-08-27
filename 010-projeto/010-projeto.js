import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Alert, SafeAreaView } from 'react-native';
import Constants from 'expo-contants';
function Separator () { 
  return <View Style = {styles-separator} /> 
export default function App () {
   return 
   <SafeAreaView style={styles.container} >
<View>
  <Button title="Aperte aqui" onPress={() => {alert('Simples')}} 
  />
</View>
<Separator/>
<View>
<Text style={styles.title}>
    Adjust the color in a way that looks standard on each platfrom. On IOS, the color prop controls the color of the text.
    On Android,m the color adjust the background color of the button.
  </Text>
<Button 
title="Aperte Aqui"
color="f194ff"
onPres={() =>}
</View>