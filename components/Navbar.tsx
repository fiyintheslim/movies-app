import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Prop} from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getFamilyMovies } from '../services/services';


interface Back{
    navigation: Prop,
    main:boolean,
}

export default function Navbar(props:Back) {
    const {navigation, main} = props;
    return (
        
        
        <SafeAreaView style={{backgroundColor:'rgba(0, 0, 0, 1)'}}>
            {main ? 
                <View style={styles.home}>
                    <Image
                        source={require('../assets/movies.png')}
                        style={{
                            height:50,
                            width:50,
                            padding: 5
                        }}
                        
                    />
                    <TouchableOpacity onPress={()=>navigation.navigation.navigate('search')}>
                        <Icon name={'search-outline'} size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.cont}>
                    <TouchableOpacity onPress={()=>navigation.navigation.goBack()}>
                        <Icon name={'chevron-back'} size={40} color={'white'} />
                    </TouchableOpacity>
                </View>
            }
        </SafeAreaView>
        
    )
}

const styles=StyleSheet.create({
    cont:{
        
    },
    home:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})