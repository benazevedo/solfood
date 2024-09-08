import React, { useState } from 'react';
import './App.css';
import apple from './images/apple.png';
import google from './images/google.png';
import food1 from './images/food-1.jpeg';
import food2 from './images/food-2.jpeg';
import food3 from './images/food-3.jpeg';

const App: React.FC = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [imgSrc, setImgSrc] = useState(food1);
  const [flipped, setFlipped] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  const changeImg = (img: string) => {
    setImgSrc(img);
  };

  return (
    <div className="App">
      <header>
        <a href="/" className="logo">
          <ion-icon name="restaurant-outline"></ion-icon>
        </a>

        <div className={`search ${searchActive ? 'active' : ''}`}>
          <ion-icon name="search-outline" onClick={toggleSearch}></ion-icon>
          <input type="text" placeholder="SEARCH" />
        </div>

        <div className="bar">
          <ul className="nav">
            <li>
              <a href="#">Breakfast</a>
            </li>
            <li>
              <a href="#">Lunch</a>
            </li>
            <li>
              <a href="#">Dinner</a>
            </li>
          </ul>
          <div className="check-out">
            <ion-icon name="bag-outline"></ion-icon>
            <span className="number">4</span>
          </div>
          <a className="menu" onClick={toggleMenu}>
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </a>
        </div>

        <ul className={`nav-mobile ${menuActive ? 'active' : ''}`}>
          <li>
            <a href="#">Breakfast</a>
          </li>
          <li>
            <a href="#">Lunch</a>
          </li>
          <li>
            <a href="#">Dinner</a>
          </li>
        </ul>
      </header>

      <div className={`banner ${flipped ? 'active' : ''}`}>
        <div className="content">
          <h1>
            Sol <ion-icon name="sunny-outline"></ion-icon>
            <br />
          </h1>
          <h2>Food</h2>
        </div>
        <div className="imgBox">
          <div className="food">
            <img className="food-img" src={imgSrc} alt="food" />
          </div>
          <div className="description">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul className="download">
              <li>
                <img src={apple} alt="Apple" />
              </li>
              <li>
                <img src={google} alt="Google" />
              </li>
            </ul>
            <span className="price">$37.59</span>
          </div>
        </div>
        <a className="btn" href="#" onClick={toggleFlip}>
          Learn more <ion-icon name="search-outline"></ion-icon>
        </a>
        <span className="order">
          <ion-icon name="bag-add-outline"></ion-icon>
        </span>
        <div className="selections">
          <div className="circle">
            <div className="options one" onClick={() => changeImg(food1)}>
              <img src={food1} alt="Food 1" />
            </div>
            <div className="options two" onClick={() => changeImg(food2)}>
              <img src={food2} alt="Food 2" />
            </div>
            <div className="options three" onClick={() => changeImg(food3)}>
              <img src={food3} alt="Food 3" />
            </div>
          </div>
          <h1>Healthy Life</h1>
        </div>
      </div>

      <ul className="sci">
        <li>
          <ion-icon name="logo-facebook"></ion-icon>
        </li>
        <li>
          <ion-icon name="logo-twitter"></ion-icon>
        </li>
        <li>
          <ion-icon name="logo-instagram"></ion-icon>
        </li>
      </ul>

      <footer>
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>Azevedo Technologies Inc.</span>
          </strong>{' '}
          All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default App;
