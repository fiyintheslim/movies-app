import React, {useState, useEffect} from 'react';
import {getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies, getDocumentaries} from '../services/services';
import {Prop, Movies} from '../types';
import {View, Button, StyleSheet, Dimensions, ScrollView, ActivityIndicator} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Slider from '../components/slider';
import List from '../components/List'



 const Home = (prop:Prop) => {
     
    const [images, setImages] = useState<string[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movies[] | undefined>(undefined);
    const [familyMovies, setFamilyMovies] = useState<Movies[] | undefined>(undefined);
    const [popularTv, setPopularTv] = useState<Movies[] | undefined>(undefined);
    const [doc, setDoc] = useState<Movies[] | undefined>(undefined)

    const [error, setError] = useState<any>(null)
    const [loaded, setLoaded] = useState<boolean>(false)
    
  
    const dimension = Dimensions.get('screen');
    

    function getData (){
        return Promise.all([
            getUpcomingMovies(),
            getDocumentaries(),
            getPopularMovies(),
            getFamilyMovies(),
            getPopularTv()
        ])
        
    }

    useEffect(()=>{
        console.log('loaded')
        getData()
        .then(([upcoming, documentaries, popularMovies, family, popularTv])=>{
            
            setImages(upcoming.map((each:Movies)=>each.poster_path));
            setPopularMovies(popularMovies);
            setPopularTv(popularTv);
            setFamilyMovies(family);
            setDoc(documentaries)

            setLoaded(true)
        })
        .catch(err=>{
            console.log('error from getting all data', err)
            setError(err)
        })
       
    }, [])
    return (
        <>
        {loaded ? 
        <ScrollView style={styles.scroll}>
            <View style={styles.home}>
                <Slider sliderImages={images}  />
            </View>

            <View style={styles.flatList} >
                <List title={'Popular Movies'} content={popularMovies} navigation={prop} />
            </View>
           <View style={styles.flatList}>
                <List title={'Popular TV Shows'} content={popularTv} navigation={prop} />
           </View>
           <View style={styles.flatList}>
                <List title={'Family Movies'} content={familyMovies} navigation={prop} />
           </View>
           <View style={styles.flatList}>
                <List title={'Documentaries'} content={doc} navigation={prop} />
           </View>
           
        </ScrollView>
        :
        <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
            <ActivityIndicator size='large' />
        </View>
        }
        </>
    
    );
}
const dimension = Dimensions.get('screen');
const styles = StyleSheet.create({
    scroll:{
        backgroundColor: 'black',
    },
    home:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    flatList:{
        flex:1,
        //height: 270,
        alignItems:'center',
        justifyContent: 'center',
        //backgroundColor: 'black'
    },
    list:{
        
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default Home;