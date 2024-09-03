import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const trainers = [
  {
    name: 'Dr. John Smith',
    title: 'Body Building Coach',
    image: { uri: 'data:image/jpeg;base64,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' },
  },
  {
    name: 'Dr. John Doe',
    title: 'Gym Trainer',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-D4FRerm-6I97y2pvchfkoCT73Kct_xPGog&s' }, // Replace with a valid image URL
  },
  {
    name: 'Dr. Amarajeewa',
    title: 'Gym Coach',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bVPTJwbbaNqdNHr40ao0sGa0ySm_SLVC_Q&s' }, // Replace with a valid image URL
  },
  {
    name: 'Mrs. Lilly Doe',
    title: 'Prof. Fitness Coach',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGFHJxroMoprngRod0O0aqlBhgoaIdWjNcA&s' }, // Replace with a valid image URL
  },
  {
    name: 'Roman Reigns',
    title: 'Prof. Wrestling Coach',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgByMRFmixTp97-aQX4-1WSrvJyGh35jSQFA&s' }, // Replace with a valid image URL
  },
];

export default function Experts() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Our Expert Trainers</Text>
      <View style={styles.trainerList}>
        {trainers.map((trainer, index) => (
          <View key={index} style={styles.trainerCard}>
            <Image source={trainer.image} style={styles.trainerImage} />
            <Text style={styles.trainerName}>{trainer.name}</Text>
            <Text style={styles.trainerTitle}>{trainer.title}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.viewAll}>View All Trainers →</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 20,
  },
  trainerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  trainerCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  trainerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  trainerName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  trainerTitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  viewAll: {
    fontSize: 16,
    color: '#6a0dad',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
