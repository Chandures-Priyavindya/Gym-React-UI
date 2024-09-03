import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const services = [
  {
    name: 'Fitness',
    description: 'Get ready to burn off some serious fat with our high-quality products.',
  },
  {
    name: 'Yoga',
    description: 'Get ready to burn off some serious fat with our high-quality products.',
  },
  {
    name: 'Gym',
    description: 'Get ready to burn off some serious fat with our high-quality products.',
  },
  {
    name: 'Aerobics',
    description: 'Get ready to burn off some serious fat with our high-quality products.',
  },
  {
    name: 'Boxing',
    description: 'Get ready to burn off some serious fat with our high-quality products.',
  },
  {
    name: 'Zumba',
    description: 'Get ready to burn off some serious fat with our high-quality products.',
  },
];

export default function Services() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Our Services</Text>
      <View style={styles.serviceList}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More →</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.viewAll}>View All Services →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 20,
  },
  serviceList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  serviceCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
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
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1ea3cc',
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 10,
  },
  readMore: {
    fontSize: 14,
    color: '#6a0dad',
    textDecorationLine: 'underline',
  },
  viewAll: {
    fontSize: 16,
    color: '#6a0dad',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
