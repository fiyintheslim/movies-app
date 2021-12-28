import React from 'react';
import {View, Text, FlatList, Image, Dimensions, StyleSheet} from 'react-native';

import RenderItem from './Card';

import {Movies, Prop} from '../types';

interface Props{
    title:string,
    content: Movies[] | undefined,
     navigation: Prop
}

const List: React.FC<Props> = (props)=>{
    const {title, content, navigation} = props;
    console.log(title, content)
    return(
        <View style={styles.list} >
            <View style={{}}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <FlatList 
                data={content}
                renderItem={({item})=><RenderItem navigation={navigation} item={item} />}
                horizontal={true}
            />
        </View>
    )
}
const styles= StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight: 'bold',
        paddingBottom: 15,
        paddingLeft: 10,
        color:'white'
    },
    list:{
        
    }
})

export default List;