import axios from 'axios';
import { MovieDetail } from '../types';

const movieURL = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=9d52cd524ab75e5cfb7c2c2801a212a3'
//popular movies
export async function getPopularMovies () {
    
    const resp = await axios.get(`${movieURL}movie/popular?${apiKey}`)
    console.log('getting popular movies', resp.data)
    return resp.data.results;
    
}
//upcoming movies
export async function getUpcomingMovies () {
    const resp = await axios.get(`${movieURL}movie/upcoming?${apiKey}`)
    console.log('getting upcoming movies', resp.data)
    return resp.data.results;
    
}
//popular tv
export async function getPopularTv () {
    const resp = await axios.get(`${movieURL}tv/popular?${apiKey}`)
    console.log('getting popular tv',resp.data)
    return resp.data.results;
    
}
//get family shows
export async function getFamilyMovies () {
    const resp = await axios.get(`${movieURL}discover/movie?${apiKey}&with_genres=10751`);
    console.log('getting family shows', resp.data)
    return resp.data.results;
    
}
//get documentaries
export async function getDocumentaries(){
    const resp = await axios.get(`${movieURL}discover/movie?${apiKey}&with_genres=99`);
    console.log('getting documentaries', resp.data)
    return resp.data.results;
}
//get movie details
export const getMovieDetail = async (id:number)=>{
    const resp = await axios.get(`${movieURL}movie/${id}?${apiKey}`)
    console.log('getting movies details', resp.data)
    return resp.data;
}
//get genres
export const getGenres =async  ()=>{
    const resp = await axios.get(`${movieURL}3/genre/movie/list?${apiKey}`)
    
    return resp.data.results
}