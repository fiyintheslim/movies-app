import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, ActivityIndicator, Dimensions, Modal, Pressable} from 'react-native';
import {Movies, Prop, MovieDetail} from '../types';
import {getGenres, getMovieDetail} from '../services/services';
import StarRating from 'react-native-star-rating';
import PlayButton from '../components/playButton';
import VideoPlayer from 'react-native-video-player';



export default function Detail(props:Prop) {
    const item = props.route.params?.details;
    const dimensions = Dimensions.get('screen')
    const [movie, setMovie] = useState<MovieDetail | null>(null)
    const [modalVisible, setModalVisible] = useState(false);
    console.log(movie)

    useEffect(()=>{
        getMovieDetail(item.id)
        .then((res)=>{
            console.log('detail', res)
            setMovie(res)
        }).catch(err=>console.log('error', err))
    }, [])

    const handleModal = ()=>{
        setModalVisible(!modalVisible)
    }
    
    return (
        <>
        {movie ?
        <>
            <ScrollView >
                <Image style={styles.img} source={{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
                <View style={styles.cont}>
                    <View style={styles.buttonCont}>
                        <PlayButton modal={handleModal} />
                    </View>
                    
                    <Text style={styles.title}>{movie.title}</Text>
                    
                    <View style={styles.genres}>
                        {movie && movie.genres? movie.genres.map((res)=><Text style={styles.genre} key={res.id}>{res.name}</Text>) : <Text></Text>}
                    </View>
                    <StarRating 
                        disabled={true}
                        maxStars={5}
                        rating={movie.vote_average / 2}
                        fullStarColor='gold'
                        starSize={30}
                    />
                    <Text style={styles.release}>{`Release date: ${movie.release_date}`}</Text>
                    <Text style={styles.overview}>{movie.overview}</Text>
                    
                </View>
            </ScrollView>
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => handleModal()}
            >
                <View style={styles.modalView}>
                    <VideoPlayer
                    video={{uri:'https://vjs.zencdn.net/v/oceans.mp4'}}
                    videoWidth={dimensions.width}
                    videoHeight={dimensions.height}
                    />
                    <Pressable onPress={()=>{handleModal()}}>
                        
                        <Text>Close Modal</Text>
                    </Pressable>
                </View>
            </Modal>
            </>
            :
            <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
                <ActivityIndicator size='large' />
            </View>
        }
        </>
    )
}
const dimension = Dimensions.get('screen')
const styles = StyleSheet.create({
    img:{
        height:dimension.height / 2,
        
    },
    cont:{
        flex:1,
        alignItems:'center',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10
    },
    genres:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:20
    },
    genre:{
        marginRight:10,
    },
    release:{
        paddingTop: 20,
        fontWeight:'bold'
    },
    overview:{
        padding: 15,
    },
    buttonCont:{
        position: 'absolute',
        right: 27,
        top: -32
    },
    modalView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
