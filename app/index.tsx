import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the Home Page</Text>

            <TouchableOpacity style={styles.button}>
                <Link href="/register" asChild>
                    <Text style={styles.buttonText}>Go to GYM REACT CUSTOMER Register</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Link href="/login" asChild>
                    <Text style={styles.buttonText}>Go to GYM REACT CUSTOMER Login</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Link href="/bmi" asChild>
                    <Text style={styles.buttonText}>Go to Calculate BMI</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Link href="/home" asChild>
                    <Text style={styles.buttonText}>Go to Home</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Link href="/experts" asChild>
                    <Text style={styles.buttonText}>Go to Our Expert Trainers</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Link href="/services" asChild>
                    <Text style={styles.buttonText}>Go to Our Services</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Link href="/popularexercises" asChild>
                    <Text style={styles.buttonText}>Go to Our Popular Exercises</Text>
                </Link>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50', // Green background
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 8,
        width: '100%', // Full width button
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
