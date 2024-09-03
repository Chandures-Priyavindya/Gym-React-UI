import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const exercises = [
  {
    name: 'Warm up',
    duration: '15 min',
    sets: '3 sets',
    calories: '100 calories',
    image: 'https://th.bing.com/th/id/OIP.zi20eGfe2ZO9Vo52cWDnxAHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Shoulder Workout',
    duration: '20 min',
    sets: '4 sets',
    calories: '150 calories',
    image: 'https://th.bing.com/th/id/OIP.MmHLcSFhB8aAG-JFu3Q-dwHaEK?w=262&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Yoga Session',
    duration: '55 min',
    sets: '5 sets',
    calories: '250 calories',
    image: 'https://th.bing.com/th/id/OIP.OlhMvgosEw6zuqQNZpUzuQHaE7?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Work Session',
    duration: '55 min',
    sets: '5 sets',
    calories: '250 calories',
    image: 'https://th.bing.com/th/id/OIP.kx_Y7wfGqHxv4l6iw-I3sAHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Leg Workout',
    duration: '18 min',
    sets: '4 sets',
    calories: '120 calories',
    image: 'https://th.bing.com/th?id=OIF.Be0D%2fCXyClP8F20E6egsNQ&w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
];

export default function PopularExercises() {
  const { width } = Dimensions.get('window');
  const cardWidth = width * 0.9; // 90% of screen width for a medium-small size

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Our Popular Exercises</Text>
      <View style={styles.exerciseList}>
        {exercises.map((exercise, index) => (
          <View key={index} style={[styles.exerciseCard, { width: cardWidth }]}>
            <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseDetails}>{`${exercise.duration} • ${exercise.sets} • ${exercise.calories}`}</Text>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.viewAll}>View All Exercises here →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center', // Center content
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 15,
    textAlign: 'center',
  },
  exerciseList: {
    alignItems: 'center', // Align cards vertically in the center
  },
  exerciseCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginVertical: 10, // Space between cards
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  exerciseImage: {
    width: '100%',
    height: 140, // Reduced height for smaller cards
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  exerciseInfo: {
    padding: 12,
    alignItems: 'center',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 5,
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  viewAll: {
    fontSize: 16,
    color: '#6a0dad',
    marginTop: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
