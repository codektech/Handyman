import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AdminFlatlist from '../../Components/AdminFlatlist';
import TabNavigator from '../../Components/TabNavigatorAdmin';


export default function HomeScreen() {

    const data= [
        {IMAGE:require('../../Images/notes.png'),height:50, width:50, Imgtext:'ORDER'},
            {IMAGE:require('../../Images/history.jpg'),height:50, width:50, Imgtext:'ORDER HISTORY'},
                {IMAGE:require('../../Images/tech.png'),height:50, width:50, Imgtext:'TECHNICIAN'},
                    {IMAGE:require('../../Images/services.png'),height:50, width:50, Imgtext:'SERVICES'},
    ]


    return (
        <View style={styles.container}>

            <View style={{
                flexDirection:"row",
                height:"5%",
                width:"100%",
                backgroundColor:"#f2f2f2",
                marginTop:"6%",
                alignItems:"center",
                justifyContent:"space-between"
                
            }}>
                <View style={{
                    flexDirection:"row"
                }}>
                
                <Text style={{
                    fontSize:18,
                    fontWeight:"bold"
                }}>
                    Handiman
                </Text>
                </View>

                <View style={{
                    flexDirection:"row"
                }}>
                    <Text>
                        SAMBALPUR
                        </Text>

                        <Ionicons
                        name="md-location-outline"
                        size={22}
                        />    
                </View>
            </View>

            <View style={{
                flexDirection:"row",
                height:"5%",
                width:"100%",
                alignItems:"center"
            }}>

                <MaterialCommunityIcons
                name="bell-ring-outline"
                size={22}
                />

                <Text style={{
                    fontSize:13
                }}>
                    Please expect delays in services due to COVID-19 restrictions
                </Text>
            </View>

            <View
            style={{
                borderBottomColor: '#f2f2f2',
                borderBottomWidth: 2,
                }}
                />

                <View style={{
                    height:"30%",
                    // backgroundColor:"blue"
                }}>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:15,
                        marginTop:"5%"
                    }}>
                        MOST USED SERVICES IN ODISHA
                    </Text>

                    <FlatList
                    data={data}
                    numColumns='2'
                    keyExtractor={(item) => item.Imgtext}
                    renderItem={({item}) => 
                    <AdminFlatlist item={item}/>}
                    />   

                </View>

                <View style={{
                    height:"30%",
                }}> 

                <Text style={{
                    fontWeight:"bold",
                    fontSize:15,
                    marginTop:"5%"
                }}>
                    WHAT DO YOU NEED TO FIND ?
                </Text>
                <Image source={require('../../Images/taps.jpg')}/>
                </View>
                    
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height:"100%",
      width:"100%"
    },
  });
