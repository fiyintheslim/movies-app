import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import {Movies, Prop} from '../types'
import {searchMovieTv} from '../services/services'

const dimension = Dimensions.get('screen')
export default function Search(prop:Prop) {
    const {navigation} = prop;
    const [text, setText] = useState<string>();
    const [results, setResults] = useState<Movies[]>()
    const submit = ()=>{
        console.log(text)
        if(text){
            Promise.all([
                searchMovieTv(text, 'movie'),
                searchMovieTv(text, 'tv')
            ])
            .then(([movies, tv])=>{
                setResults([...movies, ...tv]);
            })
            
            
        }
    }
    return (
        <View>
            <View style={style.container}>
                <View style={style.inpCont}>
                    <TextInput style={style.input} onChangeText={setText} value={text} placeholder='Search movies or TV Shows'/>
                </View>
                <TouchableOpacity onPress={()=>submit()}>
                    <Icon
                        name={'search-outline'} 
                        size={20} 
                        color={'black'} 
                    />
                </TouchableOpacity>
            </View>
            <View style={style.results}>
                {results &&results.length > 0 ? 
                    <FlatList 
                        data={results}
                        renderItem={({item})=>{
                            return <Card navigation={prop} item={item} />
                        }}
                        numColumns={3}
                        keyExtractor={item=>item.id.toString()}
                    />
                :
                    <View>
                        <Text>No search result</Text>
                    </View>
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    input:{
        borderColor:'black',
        borderWidth:1,
        
        borderRadius:15,
        padding:8,
        height:50
    },
    container:{
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        
    },
    inpCont:{
        flex:2,
        marginRight:12,
    },
    results:{
        width:dimension.width,
    }
})
