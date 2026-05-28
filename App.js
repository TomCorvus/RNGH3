import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Pressable  } from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, useDerivedValue, withTiming,useSharedValue} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function App() {

  	const pressed = useSharedValue(false)

	const opacity = useDerivedValue(() => {
		return pressed.value
			? withTiming(0.8, { duration: 120 })
			: withTiming(1, { duration: 150 })
	})

	const scale = useDerivedValue(() =>
		pressed.value
			? withTiming(0.985, { duration: 120 })
			: withTiming(1, { duration: 150 }),
	)

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ scale: scale.value }],
	}))

	const handlePressIn = () => {
		pressed.value = true
	}
	const handlePressOut = () => {
		pressed.value = false
	}



  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <AnimatedPressable onPress={()=> console.log("pressed")} style={animatedStyle} onPressIn={handlePressIn}
			onPressOut={handlePressOut}><Text>Click</Text></AnimatedPressable>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
