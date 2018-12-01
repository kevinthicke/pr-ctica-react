import * as React from 'react';
import * as styles from './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component <{},{}> {
    render() {
        return <ul className={styles.navi}>
            <a> <Link to="/home"> Home </Link> </a>
            <a> <Link to="/movies">Movies </Link></a>
            </ul>
    }
}