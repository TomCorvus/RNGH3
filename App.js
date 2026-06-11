import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Pressable  } from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, useDerivedValue, withTiming,useSharedValue} from 'react-native-reanimated';

export default function App() {


  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

	  <View style={{position: "relative"}}>
		<View style={{backgroundColor: "magenta", padding: 20, position: "absolute", top: 0, right: 0, zIndex: 1 }} />
   	 	<Pressable onPress={()=> console.log("pressed")} style={{backgroundColor: "cyan", padding: 20, zIndex: 2 }}>
			<Text>Click</Text>
		</Pressable>
		<View style={{backgroundColor: "yellow", padding: 20, position: "absolute", top: 0, left: 0, zIndex: 3 }} />
	  </View>
  
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
