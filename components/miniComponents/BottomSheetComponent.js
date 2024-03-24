import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';
const BottomSheetComponent = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // function to expand the bottom sheet
  
    return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints} onChange={handleSheetChanges}>
        <View style={styles.sheetContainer}>
          <View style={styles.header}>
            <View style={styles.pickupContainer}>
            <Text style={styles.pickupText}>Pickup</Text>
            </View>
            <View style={styles.timeDistanceContainer}>
            <Text style={styles.timeDistanceText}>1.5 km</Text>
            <Text style={styles.timeDistanceText}>5 mins</Text>
            </View>
          </View>
            {/* Add more content here as needed */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => bottomSheetRef.current?.close()}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
         <View>
            <View style={styles.passengerDetails}>
        <Text style={{textAlign:'center'}}>Passenger details</Text>
            </View>
    <View style={styles.acceptOrReject}>
            <View>
            <View style={styles.tick}>
                <Text style={{textAlign:'center'}}>
          <Ionicons name='checkmark-sharp' size={60} color='white' />;
                </Text>
            </View>
            <Text style={styles.textChoice}>Accept</Text> 
            </View>
            
            <View>

            <View style={styles.cross}>
                <Text style={{textAlign:'center'}}>
          <Ionicons name='close-sharp' size={60} color='white' />;
                </Text>
            </View> 
            <Text style={styles.textChoice}>Reject</Text> 
            </View>

    </View>
        
        </View>
        </View>
      </BottomSheet>
  )
}


const styles = StyleSheet.create({
    passengerDetails:{
    width:'95%',
    borderWidth:1,
    height:'40%',
    margin:10,
    },
        acceptOrReject:{
    
    flexDirection:'row',
    backgroundColor:'grey',
        alignItems:'center',
    justifyContent:'center',
    paddingVertical:20
    
    }
    ,    
    tick:{
    backgroundColor:'green',
    width:70,
    padding:2,
    borderRadius:10,
    marginHorizontal:40,
    
    },
    cross:{
        backgroundColor:'red',
    width:70,
    padding:2,
    borderRadius:10,
    marginHorizontal:40,
    },
    
        searchContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      goContainer: {},
      searchBox: {
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        marginTop: 50,
        borderRadius: 10,
        width: '90%',
      },
      searchBoxInput: {
        textAlign: 'center',
      },
      text: {
        color: 'white',
        textAlign:'center'
      },
      textChoice: {
        color: 'white',
        textAlign:'center',
        fontSize:20
      },
      header: {
        flexDirection:'row',
        marginHorizontal: 20,
        justifyContent:'space-between'
      },
      pickupText: {
        textAlign:'left',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal:2
      },
      timeDistanceText: {
        textAlign:'right',
        fontSize: 15,
        marginHorizontal:2,
        marginHorizontal:10,
        backgroundColor:'grey',
        color:'white',
        borderRadius:10,
        padding:5,
        paddingHorizontal:10,
    
        
    },
    pickupContainer:{
    // backgroundColor:'red',
    // borderRadius:10,
    padding:5,
    paddingHorizontal:10,
    
      },
      timeDistanceContainer:{
    flexDirection:'row',
      
    },
    contentContainer: {
        alignItems:'center'
      },
      closeButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        margin: 10,
      },
      closeButtonText: {
        color: 'white',
      },
    });
    

export default BottomSheetComponent