import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient background
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isPressed, setIsPressed] = useState(false); // State for button press effect
  const slideAnim = new Animated.Value(0); // Animated value for slide effect

  const handleNext = () => {
    if (
      (step === 0 && (!name || !age)) ||
      (step === 1 && !weight) ||
      (step === 2 && !height)
    ) {
      alert('Please fill in all fields before proceeding.');
      return;
    }

    Animated.timing(slideAnim, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      slideAnim.setValue(0); // Reset animation
      setStep(step + 1); // Move to next step
    });
  };

  const handleGetStarted = () => {
    // Navigate to the Home page when "Get Started" is clicked
    navigation.navigate('Main');
  };

  const steps = [
    {
      icon: 'user', // Changed to 'user' icon
      title: 'Welcome to Fitness Tracker',
      fields: (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            keyboardType="number-pad"
            value={age}
            onChangeText={setAge}
          />
        </>
      ),
    },
    {
      icon: 'heartbeat', // Changed to 'heartbeat' for a casual look
      title: 'Enter Your Weight',
      fields: (
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          keyboardType="number-pad"
          value={weight}
          onChangeText={setWeight}
        />
      ),
    },
    {
      icon: 'arrows-v', // This icon remains for height
      title: 'Enter Your Height',
      fields: (
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          keyboardType="number-pad"
          value={height}
          onChangeText={setHeight}
        />
      ),
    },
    {
      icon: 'check-circle', // Kept this icon for the final step
      title: 'Get Started',
      fields: (
        <View>
          <Text style={styles.finalText}>You're all set! Let's get started.</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonBackground]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={handleGetStarted}
          >
            <LinearGradient
              colors={['#FFB6C1', '#FF69B4']} // More casual, soft gradient
              style={[styles.buttonBackground, isPressed ? styles.buttonActive : styles.buttonInactive]}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ),
    },
  ];

  return (
    <LinearGradient
      colors={['#FF7F50', '#FFE4E1']} // Casual, warm gradient background
      style={styles.container}
    >
      <Animated.View
        style={[styles.contentContainer, { transform: [{ translateX: slideAnim }] }]}>
        {steps.map((stepData, index) => (
          <View
            key={index}
            style={[styles.card, index === step ? { display: 'flex' } : { display: 'none' }]}>
            <Icon name={stepData.icon} size={60} color="#fff" style={styles.icon} />
            <Text style={styles.title}>{stepData.title}</Text>
            {stepData.fields}
            {index < steps.length - 1 && (
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <LinearGradient
                  colors={['#FFB6C1', '#FF69B4']} // Casual button colors
                  style={styles.buttonBackground}>
                  <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Animated.View>
      <View style={styles.progressContainer}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[styles.progressDot, step === index ? styles.activeDot : styles.inactiveDot]}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    width: width * 4, // Adjusted to accommodate the 4 steps
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  card: {
    width,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    elevation: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D6DBDF',
  },
  button: {
    width: '80%',
    marginTop: 10,
    borderRadius: 25,
    elevation: 5,
  },
  buttonBackground: {
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonActive: {
    backgroundColor: '#FF1493', // Darker shade when pressed
  },
  buttonInactive: {
    backgroundColor: '#FF69B4', // Default color
  },
  progressContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FF69B4',
  },
  inactiveDot: {
    backgroundColor: '#FFDAB9',
  },
  finalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SplashScreen;
