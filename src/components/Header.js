import React from "react";
import "../style/Header.css"

export default function Header(){
    return (
        <header className="header">
            <img src="../images/logo.svg" alt=""/>
            <h4>Meme Generator</h4>
            <p>React Course - Project 3</p>
        </header>
    )
}