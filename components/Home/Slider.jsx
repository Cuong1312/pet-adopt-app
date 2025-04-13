import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig';

export default function Slider() {
    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        GetSliders();
    }, []);

    const GetSliders = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'Sliders'));
            const sliders = [];
            snapshot.forEach((doc) => {
                sliders.push(doc.data());
            });
            setSliderList(sliders);
        } catch (error) {
            console.error('Error fetching sliders:', error);
        }
    };

    return (
        <View>
            <FlatList
                data={sliderList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Image
                            source={{ uri: item?.imageUrl }}
                            style={styles.sliderImage}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sliderImage: {
        width: '80%',
        height: 160,
        resizeMode: 'cover', // Đảm bảo ảnh không bị méo
        alignSelf: 'center', // Căn giữa ảnh
    },
});
