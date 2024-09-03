import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function BMICalculator() {
    const [weight, setWeight] = useState<string>('0');
    const [height, setHeight] = useState<string>('0');

    const calculateBMI = () => {
        const weightInKg = parseFloat(weight);
        const heightInCm = parseFloat(height);

        if (isNaN(weightInKg) || isNaN(heightInCm) || heightInCm === 0) {
            Alert.alert("Please enter valid numbers for weight and height.");
            return;
        }

        const heightInMeters = heightInCm / 100;
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        Alert.alert(`Your BMI is ${bmi.toFixed(2)}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculate Your BMI</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Weight (kg)"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Height (cm)"
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                <Text style={styles.buttonText}>Calculate BMI</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4a4a69',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    input: {
        width: '45%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#8e44ad',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,       
        textAlign: 'center',
    },
});
