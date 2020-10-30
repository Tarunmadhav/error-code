import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner"
export default class TransactionScreen extends Component {
  constructor(){
    super();
    this.state={hasCameraPermissions:null,scanned:false,scannedData:"",buttonState:"normal"}
 }
 getCameraPermissions=async()=>{
   const {status}=await Permissions.askAsync(Permissions.CAMERA)
   this.setState({hasCameraPermissions:status==="granted",buttonState:"clicked"})
 }
 handleBarCodeScanned=async({type,data})=>{
this.setState({scanned:true,scannedData:data,buttonState:"normal"})
 }
    render() {
      const hasCameraPermissions=this.state.hasCameraPermissions
      const scanned=this.state.scanned
      const buttonState=this.state.buttonState
      if(buttonState==="clicked"&&hasCameraPermissions){
        return(
          <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}/>
        )
      }
      else if(buttonState==="normal"){
        return (
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.buttonText}>
    {hasCameraPermissions === true ? this.state.scannedData : "requestCameraPermissions"}
  </Text>
            <TouchableOpacity style={styles.scanButton} onPress={this.getCameraPermissions}>
  <Text style={styles.buttonText}>
    SCAN QR CODE
  </Text>
  
            </TouchableOpacity>
  
          </View>
        )
      }
      
    }
  }
  const styles = StyleSheet.create({
    scanButton:{backgroundColor:"black",padding:10,margin:10},
    buttonText:{fontSize:15,padding:10,margin:10},
  })