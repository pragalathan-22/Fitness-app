import React from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Dummy data for demonstration purposes
const workoutSuggestions = [
  { id: '1', title: 'Strength Training', icon: 'dumbbell' },
  { id: '2', title: 'Yoga', icon: 'bed' },
  { id: '3', title: 'HIIT', icon: 'fire' },
  { id: '4', title: 'Running', icon: 'running' },
];

const HomeScreen = ({ navigation, route }) => {
  const [numColumns, setNumColumns] = React.useState(2);
  const [showMessage, setShowMessage] = React.useState(false); // State to toggle message visibility

  // Destructure data passed from previous screen (if available)
  const { name, age, weight, height, steps = 0, caloriesBurned = 0, distance = 0, activeMinutes = 0 } = route.params || {};

  const renderWorkoutSuggestion = ({ item }) => (
    <View style={styles.workoutCard}>
      <View style={styles.workoutCardContent}>
        <Icon name={item.icon} size={30} color="#2C3E50" style={styles.workoutIcon} />
        <Text style={styles.workoutTitle}>{item.title}</Text>
      </View>
      <TouchableOpacity
        style={styles.workoutButton}
        onPress={() => navigation.navigate('Workout', { workoutId: item.id })}
      >
        <Text style={styles.workoutButtonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header with profile and bell icons */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, {name}!</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Icon name="bell" size={24} color="#2C3E50" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setShowMessage(!showMessage); // Toggle message visibility when profile icon is clicked
          }}>
            <Icon name="user-circle" size={24} color="#2C3E50" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Conditional message */}
      {showMessage && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Hello Bro, let's start the workout and routine!</Text>
        </View>
      )}

      {/* User's Fitness Overview */}
      <View style={styles.fitnessOverview}>
        <Text style={styles.fitnessTitle}>Your Fitness Overview</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Steps</Text>
            <Text style={styles.statValue}>{steps || 0}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Calories</Text>
            <Text style={styles.statValue}>{caloriesBurned || 0} kcal</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Distance</Text>
            <Text style={styles.statValue}>{distance || 0} km</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Active Minutes</Text>
            <Text style={styles.statValue}>{activeMinutes || 0} min</Text>
          </View>
        </View>
      </View>

      {/* Workout Suggestions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Workout Suggestions</Text>
        <FlatList
          data={workoutSuggestions}
          renderItem={renderWorkoutSuggestion}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          columnWrapperStyle={styles.row}
        />
      </View>

      {/* Remaining Sections */}
      {/* Add any other content like Achievements, Profile Snapshot, etc. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  fitnessOverview: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  fitnessTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#34495E',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '45%',
    marginBottom: 15,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  workoutCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    width: '45%',
    margin: '2.5%',
  },
  workoutCardContent: {
    alignItems: 'center',
  },
  workoutIcon: {
    marginBottom: 10,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  workoutButton: {
    backgroundColor: '#1ABC9C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  workoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
  },
  messageContainer: {
    backgroundColor: '#EAF5F5',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    color: '#2C3E50',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
