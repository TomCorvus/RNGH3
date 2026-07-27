import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Pressable  } from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, useDerivedValue, withTiming,useSharedValue} from 'react-native-reanimated';

export default function App() {

  const [closed, setClosed] = useState(false)


  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={{position: "relative"}}>
        <Pressable onPress={()=> setClosed(true)} style={{backgroundColor: "cyan", padding: 20, zIndex: 2 }}>
          <Text>Click</Text>
        </Pressable>
        
      </View>
    </View>
    {closed && (
        <Pressable onPress={()=> setClosed(false)} style={{backgroundColor: "yellow", padding: 20, position: "absolute", top: 0, left: 0, right: 0, bottom: 0,zIndex: 3, opacity: .5 }} />
    )}
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
