import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button, Dimensions  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import {
  useFonts,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import {
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Usdc from './assets/usdc_standard.svg';
import Svg, { Defs, Stop, Rect } from 'react-native-svg'

export default function HomePage() {

  const { width, height } = Dimensions.get('window')

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Placeholder for Search Icon on right */}
        <View style={{ flex: 1 }}></View>
        <Ionicons name="search" style={styles.icon} />
        <Ionicons name="person-circle" style={{ fontSize: 50, color: 'white' }} />
        {/* <View style={styles.avatar}>
          
          <Text>?</Text>
        </View> */}
      </View>

      {/* Wallet Section */}
      {/* <View style={styles.walletSection}> */}
      <LinearGradient 
  colors={['#1a1a1c', '#0F0F10']} 
  start={{ x: 0, y: 0 }} 
  end={{ x: 1, y: 0 }} 
  style={styles.walletSection}
>
  <Text style={styles.walletHeader}>Wallet Balance</Text>
  <Text style={styles.balanceText}>250.69 USDC</Text>
  <Usdc width={120} height={40} />
</LinearGradient>

      {/* Microphone Circle Placeholder */}
      <View style={styles.speechInputContainer}>
      <Text style={styles.optionHeader}>Speak to your wallet</Text>
      <LinearGradient colors={['#E94560', '#9f203e']} style={styles.microphoneCircle}>
          <Ionicons name="mic-sharp" size={80} color="black" />
        </LinearGradient>
      <TextInput
        style={styles.transcriptionBox}
        placeholder="Example: 'Pay Zach five USDC.'"
        placeholderTextColor="white"
      />
      <LinearGradient colors={['#E94560', '#9f203e']} style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </LinearGradient>
    </View>


      {/* Options Section */}
      {/* <View style={styles.optionsContainer}>
    <Text style={styles.optionHeader}>Or choose another option</Text>
    <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Load USDC</Text></TouchableOpacity>
    <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Pay/Request</Text></TouchableOpacity>
    <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Buy Stocks</Text></TouchableOpacity>
    <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Swap</Text></TouchableOpacity>
  </View> */}
  
  <View style={styles.optionsContainer}>
    
        <Text style={styles.optionHeader}>Or choose another option</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Pay/Request <Ionicons name="arrow-forward" size={24} color="white" style={{ marginRight: 10 }}/></Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Swap  <Ionicons name="swap-horizontal" size={24} color="white" style={{ marginRight: 10 }}/>
           </Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Load USDC  <Ionicons name="wallet-outline" size={24} color="white" style={{ marginRight: 10 }}/>
           </Text></TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Buy Stocks <Ionicons name="trending-up" size={24} color="white" style={{ marginRight: 10 }}/>
           </Text></TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <LinearGradient colors={['#3A3A4F', '#1A1A2E']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.footer}>
      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="home" style={[styles.footerIcon, styles.activeIcon]} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="wallet-outline" style={styles.footerIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="analytics-outline" style={styles.footerIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="settings-outline" style={styles.footerIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="person-outline" style={styles.footerIcon} />
      </TouchableOpacity>
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 40, // added some margin to avoid overlapping with status bar
  },
  icon: {
    color: '#E94560',
    fontSize: 24,
    marginHorizontal: 10,
  },
  avatar: {
    // width: 50,
    // height: 50,
    // borderRadius: 25,
    // borderColor: 'black',
    // borderWidth: 2,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  walletSection: {
    marginTop: 30,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15, // rounded the border
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9,
  },
  walletHeader: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'Inter_400Regular',
    marginBottom: 10,
  },
  balanceText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
  },
  speechInputContainer: {
    marginTop: 30,
  },
  microphoneCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9,
  },
  submitButton: {
    marginTop: 10,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  optionHeader: {
    fontSize: 22,
    fontFamily: 'Poppins_400Regular',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9,
  },
  optionButton: {
    width: '48%',
    backgroundColor: '#0F0F10',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginVertical: 7.5,
    borderColor: 'grey',  // Color of the border
    borderWidth: 1,    
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  footerIcon: {
    color: 'white',
    fontSize: 26,
  },
  activeIcon: {
    color: '#E94560',
  },
  transcriptionBox: {
    marginTop: 15,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
  },
});