import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View>
            <Text>Welcome to the Home Page</Text>
            <Link href="/register">
                <Text>Go to GYM REACT CUSTOMER Register</Text>
            </Link>
            <Link href="/login">
                <Text>Go to GYM REACT CUSTOMER login</Text>
            </Link>
            <Link href="/bmi">
                <Text>Go to Calculate BMI</Text>
            </Link>
            <Link href="/home">
                <Text>Go to home</Text>
            </Link>
            <Link href="/experts">
                <Text>Go to Our Expert Trainers</Text>
            </Link>
            <Link href="/services">
                <Text>Go to Our services</Text>
            </Link>
            <Link href="/popularexercises">
                <Text>Go to Our popularexercises</Text>
            </Link>
            
        </View>
    );
}
