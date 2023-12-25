import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg'
import { Ionicons } from '@expo/vector-icons'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter'

const { width, height } = Dimensions.get('window')

export default function LandingPage() {
  const navigation = useNavigation()

  const [scale, setScale] = useState(new Animated.Value(1))

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Svg height={height} width={width} style={styles.absoluteFill}>
        <Defs>
          <LinearGradient id="grad1" x1="1" y1="1" x2="0" y2="1">
            <Stop offset="0" stopColor="#E94560" stopOpacity="1" />
            <Stop offset="1" stopColor="#1A1A2E" stopOpacity="1" />
          </LinearGradient>
          <LinearGradient id="grad2" x1="1" y1="1" x2="1" y2="0">
            <Stop offset="0.1" stopColor="#1A1A2E" stopOpacity="0.6" />
            <Stop offset="1" stopColor="#1A1A2E" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width={width} height={height} fill="url(#grad1)" />
        <Rect x="0" y="0" width={width} height={height} fill="url(#grad2)" />
      </Svg>

      <Image
        source={require('./assets/langpayMascot.png')}
        style={styles.imageStyle}
      />

      <Text style={styles.title}>SnapPay</Text>
      <Text style={styles.subtitle}>The AI-enabled crypto platform</Text>
      <View style={styles.divider} />

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.7}
        style={styles.touchableButtonContainer}
      >
        <Animated.View style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
          <View style={styles.spacer} />
          <Ionicons
            name="arrow-forward"
            size={24}
            color="black"
            style={styles.arrowIcon}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  touchableButtonContainer: {
    position: 'absolute',
    bottom: 40,
    left: width * 0.05,
    right: width * 0.05,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spacer: {
    flex: 1,
  },
  arrowIcon: {
    color: 'white',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: height * 0.4,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: height * 0.35,
  },
  divider: {
    height: 2,
    width: '50%',
    backgroundColor: '#E94560',
    marginVertical: 20,
    alignSelf: 'center',
    marginTop: -50,
  },
  imageStyle: {
    width: width * 0.85,
    height: height * 0.85,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -50, // Try this negative margin to move the image up
  },
})
