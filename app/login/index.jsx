import { View, Text, Image, Pressable, Platform } from 'react-native';
import React, { useCallback } from 'react';
import Colors from './../../constants/Colors';
import * as Linking from 'expo-linking';

// Hoàn thành phiên Auth nếu cần (dành cho môi trường web)
export default function LoginScreen() {
    // Hàm xử lý khi nhấn nút "Get Started"
    const onPress = useCallback(() => {
        console.log('Get Started button pressed'); // Kiểm tra xem nút có được bấm hay không

        try {
            // Điều hướng trên web
            const redirectUrl = Linking.createURL('/(tabs)/home', { scheme: 'myapp' });
            console.log('Redirecting to:', redirectUrl);
            window.location.href = redirectUrl; // Điều hướng đến trang /home

            // Nếu có quy trình OAuth, thêm code xử lý OAuth ở đây
            // VD: window.location.href = 'https://oauth-url.com';
        } catch (err) {
            console.error('OAuth error:', err);
        }
    }, []);

    return (
        <View style={{ backgroundColor: Colors.WHITE, height: '100%' }}>
            <Image
                source={require('./../../assets/images/login.png')}
                style={{
                    width: '100%',
                    height: 300,
                }}
            />
            <View
                style={{
                    padding: 20,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 20,
                        textAlign: 'center',
                    }}
                >
                    Ready to make a new friend?
                </Text>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 18,
                        textAlign: 'center',
                        color: Colors.GRAY,
                    }}
                >
                    Let's adopt the pet which you like and make their life happy again.
                </Text>

                <Pressable
                    onPress={onPress}
                    style={{
                        padding: 14,
                        marginTop: 100,
                        backgroundColor: Colors.PRIMARY,
                        width: '100%',
                        borderRadius: 14,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                            textAlign: 'center',
                        }}
                    >
                        Get Started
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
