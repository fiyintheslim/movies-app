import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native'
import {Movies, Prop} from '../types';
import placeholder from '../assets/error.jpg';
interface cardProp{
    item:Movies,
    navigation: Prop
}
const Card = (props:cardProp) =>{
    const dimension = Dimensions.get('screen')
    const {poster_path} = props.item
    const {navigation} = props.navigation;
    return(
        <>
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Details', {details: props.item})}>
            <Image resizeMode='cover' style={styles.img} source={poster_path ? {uri:`https://image.tmdb.org/t/p/w500${poster_path}`} : placeholder} />
        </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:3,
        position:'relative'
    },
    img:{
        height: 200,
        width: 120,
        borderRadius:15,
    }
})
export default Card