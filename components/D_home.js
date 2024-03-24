import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import RootComponent from './RootComponent/RootComponent';

const D_home = () => {
  const bottomSheetRef = useRef(null);

  const handlePresentModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <RootComponent>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Overlay Box */}
        <View style={styles.overlay} />

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Academia Ride</Text>
        </View>

        {/* Destination Box */}
        <View style={styles.destContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='panvel sector 21' placeholderTextColor="#FFBC07" />
          </View>
        </View>

        {/* Search Box */}
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Enter your destination' placeholderTextColor="#FFBC07" />
          </View>
        </View>

        {/* GO Button */}
        <View style={styles.goContainer}>
          <TouchableOpacity onPress={handlePresentModal} style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>GO</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </RootComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: 'relative', // Ensure relative positioning for overlay
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Adjust the marginTop to position it accordingly
  },
  titleText: {
    color: 'white',
    fontSize: 24, // Adjust the fontSize as needed
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    height: 264,
    width: 380,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputContainer: {
    backgroundColor: '#22272B',
    height: 50,
    padding: 10,
    marginTop: 50,
    borderRadius: 10,
    width: '90%',
  },
  input: {
    textAlign: 'center',
    color: '#FFBC07',
  },
  destContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 10,
    alignItems: 'center',
  },
  goContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  outerCircle: {
    height: 140,
    width: 140,
    backgroundColor: 'rgba(255, 188, 7, 0.1)',
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 110,
    width: 110,
    backgroundColor: 'rgb(255, 188, 7)',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default D_home;
