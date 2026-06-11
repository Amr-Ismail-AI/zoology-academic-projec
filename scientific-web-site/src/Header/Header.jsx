import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <a href="/home">Zoology</a>
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#phylums">Phylums</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contant">Contacts</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
