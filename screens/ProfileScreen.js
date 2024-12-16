import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// Dummy data for profile details
const userProfile = {
  name: 'John Doe',
  age: 30,
  weight: 70,
  height: 175,
  profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
};

const ProfileScreen = ({ navigation }) => {
  
  // Function to handle logout
  const handleLogout = () => {
    // Add your logout logic here, like clearing user session, tokens, etc.
    // For now, we're just navigating to the Login screen
    navigation.navigate('Login'); // Assuming you have a Login screen set up
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header with icons */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, {userProfile.name}!</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Icon name="bell" size={24} color="#2C3E50" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="home" size={24} color="#2C3E50" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Picture and Info */}
      <View style={styles.profileSection}>
        <Image source={{ uri: userProfile.profilePic }} style={styles.profilePic} />
        <Text style={styles.profileName}>{userProfile.name}</Text>
        <Text style={styles.profileDetails}>Age: {userProfile.age}</Text>
        <Text style={styles.profileDetails}>Weight: {userProfile.weight} kg</Text>
        <Text style={styles.profileDetails}>Height: {userProfile.height} cm</Text>
      </View>

      {/* Edit Profile Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Workout Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Workout Preferences</Text>
        <View style={styles.workoutOption}>
          <Text style={styles.workoutOptionText}>Preferred Workout: Home Workout</Text>
          <TouchableOpacity
            style={styles.changeButton}
            onPress={() => navigation.navigate('ChangeWorkoutPreference')}>
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.workoutOption}>
          <Text style={styles.workoutOptionText}>Preferred Time: Morning</Text>
          <TouchableOpacity
            style={styles.changeButton}
            onPress={() => navigation.navigate('ChangeWorkoutTime')}>
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Workout History */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Workout History</Text>
        <View style={styles.historyItem}>
          <Text style={styles.historyText}>Completed 5 sessions of Home Workout</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyText}>Completed 3 sessions of Gym Workout</Text>
        </View>
      </View>

      {/* Logout Button */}
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495E',
  },
  profileDetails: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  buttonContainer: {
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#1ABC9C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
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
  workoutOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  workoutOptionText: {
    fontSize: 16,
    color: '#2C3E50',
  },
  changeButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  historyItem: {
    padding: 10,
    backgroundColor: '#f7f7f7',
    marginBottom: 10,
    borderRadius: 5,
  },
  historyText: {
    fontSize: 16,
    color: '#34495E',
  },
  logoutButtonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default ProfileScreen;
