import * as React from 'react';
import * as styles from './Movies.css';
const movies = require('./../../data/movies.json').movies;

export interface MoviesState {
    name: string;
    movies: Array<{ id: string, title: string, year: string }>;
}

export default class Movies extends React.Component <{}, MoviesState> {    
    constructor(props) {
        super(props);
        this.state = {
            name: 'Aplicación de movies',
            movies
        }
    }
    render () {
        const arrayOfMovies = this.state.movies;
        const movies = arrayOfMovies.map(movie => {
            return <div className={styles.cardMovie}>
                <div className={styles.movieInfo}> {movie.title}</div>
                <div className={styles.movieInfo}> {movie.year}</div>
                </div>
        });
        return <div className={styles.container}>{movies}</div>
    }
}