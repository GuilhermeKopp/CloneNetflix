/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Marvel-Logo-2012-2014.png" alt="Marvel" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://www.rxwallpaper.site/wp-content/uploads/spider-man-2099-wallpaper-78-images-800x800.jpg" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}