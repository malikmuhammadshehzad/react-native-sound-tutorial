import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
 import Sound from 'react-native-sound';

const App = () => {
  const PlaySound=()=>{
    var  SupraSound = new Sound('supra.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' +  SupraSound.getDuration() + 'number of channels: ' +  SupraSound.getNumberOfChannels());
    
      // Play the sound with an onEnd callback
       SupraSound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }
  return (
    <View style={{padding:12}}>
      <TouchableOpacity onPress={PlaySound}  >
        <Image style={{width:"100%" , height:300 , borderRadius:12 , resizeMode:'contain' }}  source={require('./supra.png')} />
      </TouchableOpacity  >
      <View style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:70}} >
        <Text style={{fontWeight:'800', fontSize:50 , color:'black'}} >Onclick Sound</Text>
        <Text style={{fontWeight:'800', fontSize:50 , color:'red'}} >Ratatatata</Text>
        <Text style={{fontWeight:'800', fontSize:50 , color:'black', marginTop:50}} >React Native</Text> 
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
