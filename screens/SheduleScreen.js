import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

// Dummy data for home and gym workout options
const workoutOptions = [
  { id: '1', title: 'Home Workout - Yoga', type: 'Home' },
  { id: '2', title: 'Home Workout - Cardio', type: 'Home' },
  { id: '3', title: 'Gym Workout - Strength', type: 'Gym' },
  { id: '4', title: 'Gym Workout - HIIT', type: 'Gym' },
];

const ScheduleScreen = ({ navigation }) => {
  const [selectedWorkout, setSelectedWorkout] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [schedule, setSchedule] = React.useState([]);

  // Function to handle adding workout to schedule
  const handleAddToSchedule = () => {
    if (selectedWorkout && selectedTime) {
      setSchedule([
        ...schedule,
        { id: Math.random().toString(), title: selectedWorkout, time: selectedTime },
      ]);
      setShowModal(false);
    }
  };

  // Function to handle time selection from Picker
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const renderWorkoutOption = ({ item }) => (
    <TouchableOpacity
      style={styles.workoutCard}
      onPress={() => {
        setSelectedWorkout(item.title);
        setShowModal(true);
      }}
    >
      <Text style={styles.workoutTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#2C3E50" style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Workout Schedule</Text>
      </View>

      {/* Workout Options */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Choose a Workout</Text>
        <FlatList
          data={workoutOptions}
          renderItem={renderWorkoutOption}
          keyExtractor={(item) => item.id}
          numColumns={1}
        />
      </View>

      {/* Scheduled Workouts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Schedule</Text>
        {schedule.length === 0 ? (
          <Text style={styles.noScheduleText}>No workouts scheduled yet.</Text>
        ) : (
          <FlatList
            data={schedule}
            renderItem={({ item }) => (
              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleTitle}>{item.title}</Text>
                <Text style={styles.scheduleTime}>{item.time}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>

      {/* Modal for selecting time and adding workout */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Time for {selectedWorkout}</Text>
            <Picker
              selectedValue={selectedTime}
              style={styles.timePicker}
              onValueChange={handleTimeSelection}
            >
              <Picker.Item label="Morning (8:00 AM)" value="8:00 AM" />
              <Picker.Item label="Afternoon (12:00 PM)" value="12:00 PM" />
              <Picker.Item label="Evening (6:00 PM)" value="6:00 PM" />
            </Picker>
            <TouchableOpacity style={styles.addButton} onPress={handleAddToSchedule}>
              <Text style={styles.addButtonText}>Add to Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setShowModal(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 15,
  },
  workoutCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  noScheduleText: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  scheduleItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  scheduleTime: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 20,
  },
  timePicker: {
    width: '100%',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#1ABC9C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ScheduleScreen;
