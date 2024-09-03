import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RegisterScreen() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleRegister = () => {
        // Handle the registration logic here
        alert('Register button pressed');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.headerText}>GYM REACT CUSTOMER</Text>

            <View style={styles.registerContainer}>
                <Text style={styles.title}>User Register</Text>
                
                <TextInput 
                    style={styles.input} 
                    placeholder="First Name" 
                    value={firstName} 
                    onChangeText={setFirstName} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Last Name" 
                    value={lastName} 
                    onChangeText={setLastName} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Address" 
                    value={address} 
                    onChangeText={setAddress} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Age" 
                    value={age} 
                    onChangeText={setAge} 
                    keyboardType="numeric" 
                />
                
                <View style={styles.pickerContainer}>
                    <Picker 
                        selectedValue={gender} 
                        onValueChange={(itemValue) => setGender(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                    </Picker>
                </View>
                
                <TextInput 
                    style={styles.input} 
                    placeholder="Email" 
                    value={email} 
                    onChangeText={setEmail} 
                    keyboardType="email-address" 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Phone Number" 
                    value={phoneNumber} 
                    onChangeText={setPhoneNumber} 
                    keyboardType="phone-pad" 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Password" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChangeText={setConfirmPassword} 
                    secureTextEntry 
                />
                
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.loginText}>
                    Already have an account? 
                    <Text style={styles.loginLink}> Login</Text>
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e24',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40,
    },
    registerContainer: {
        width: '100%',
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    pickerContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: '#fff',
    },
    picker: {
        width: '100%',
        height: 50,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    loginText: {
        marginTop: 10,
        color: '#000',
        textAlign: 'center',
    },
    loginLink: {
        color: '#3498db',
        fontWeight: 'bold',
    },
});
