import { View, Text, Image } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

export default function Header() {
    const { user } = useUser();

    return (
        <View style={{ padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18
                }}>Welcome,</Text>
                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 25
                }}>
                    {user?.fullName || 'Guest'}
                </Text>
            </View>

            {/* Kiểm tra xem user có ảnh hay không */}
            {user?.imageUrl ? (
                <Image
                    source={{ uri: user.imageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20, // Tạo ảnh tròn
                        marginTop: 10
                    }}
                />
            ) : (
                <View
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#ddd', // Màu nền khi không có ảnh
                        borderRadius: 20,
                        marginTop: 10
                    }}
                />
            )}
        </View>
    );
}
