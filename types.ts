import { NativeStackScreenProps } from '@react-navigation/native-stack';
export interface Movies{
    adult: false,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: false,
    vote_average: number,
    vote_count: number
  }

  type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };
  export type Prop = NativeStackScreenProps<RootStackParamList, 'Home'>

  export interface MovieDetail{
    adult:boolean,
backdrop_path?:string,
belongs_to_collection?:object,
budget:number,
genres:object[],
homepage?:string,
id:number,
imdb_id?:string,
original_language:string,
original_title:string,
overview?:string,
popularity:number,
poster_path?:string,
production_companies:object[],
production_countries:object[],
release_date:string,
revenue:number,
runtime?:number,
spoken_languages:object[],
status:string,
Allowed: 'Rumored' | 'Planned'| 'In Production' | 'Post Production' | 'Released' | 'Canceled',
tagline?:string,
title:string,
video:boolean,
vote_average:number,
vote_count:number,
}