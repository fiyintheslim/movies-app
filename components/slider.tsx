import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
interface carousel{
    item:string,
    index:number
}
interface Props{
    sliderImages: string[];
}
const _renderItem  = ({item, index}: carousel) => {
    return (
        <Image resizeMode='cover' style={{height:450}} source={{uri:`https://image.tmdb.org/t/p/w500${item}`}} />
    );
}

const Slider: React.FC<Props> = (props) => {
    const dimensions = Dimensions.get('screen')
    return (
        <View style={styles.sliderContainer}>
            <Carousel 
                data={props.sliderImages}
                renderItem={_renderItem}
                sliderWidth={dimensions.width}
                itemWidth={dimensions.width}
                
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                autoplay={true}
                autoplayInterval={5000}
                loop={true}
                layout={'stack'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer:{
        
        marginTop: 0,
        flex:1
    }
})

export default Slider;