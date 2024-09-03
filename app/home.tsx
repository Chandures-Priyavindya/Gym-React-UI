import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>GYM REACT</Text>
            <View style={styles.imageTextContainer}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fVxmdvzcqRBCaGiXPVAGEYfjtKK9WVX3LA&s' }} // Use a correct path to the image
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Effortless Strength, Timely Gains:</Text>
                    <Text style={styles.subtitle}>Building Better Bodies, Faster</Text>
                    <Text style={styles.description}>
                        At Our Gym, we prioritize a holistic approach to health, offering a range of cutting-edge equipment, personalized training programs, and diverse fitness classes. Our knowledgeable and friendly staff are committed to creating an inclusive and motivating environment, ensuring that everyone feels welcome and empowered.
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Become a member</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Become a coach</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    imageTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 20,
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#7f8c8d',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        backgroundColor: '#8e44ad',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
