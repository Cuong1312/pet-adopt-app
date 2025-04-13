import { Stack } from "expo-router";
import { useFonts } from "expo-font"; // Import useFonts từ expo-font
import React from "react";
import * as SecureStore from 'expo-secure-store'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function RootLayout() {
  // Tải font
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  // Hiển thị loading nếu font chưa tải xong
  if (!fontsLoaded) {
    return null; // Hoặc bạn có thể hiển thị một màn hình loading tùy chỉnh
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={publishableKey}>

      <Stack>
        {/* Route cho màn hình chính ("/") */}
        <Stack.Screen name="index" />

        {/* Route cho màn hình tab */}
        <Stack.Screen name="(tabs)"
          options={{
            headerShown: false
          }} />

        {/* Route cho màn hình login/index */}
        <Stack.Screen
          name="login/index"
          options={{
            headerShown: false, // Ẩn header trên màn hình login
          }}
        />
      </Stack>
    </ClerkProvider>
  );
}
