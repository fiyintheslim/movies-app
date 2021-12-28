import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    modal : Function,
}

export default function PlayButton (props:Props) {
    const {modal} = props;
    return (
        <Pressable style={styles.button} onPress={()=>modal()}>
            <Icon name={'caret-forward-outline'} size={35} color={'white'} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        padding:10,
        alignItems:'center',
        backgroundColor:'#4481FC',
        borderRadius:50,
    }
})
