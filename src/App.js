//import React from 'react'; or 
import { Component, StrictMode} from 'react';  //  destruct sintax
import './App.css';

//using another sintax class
class Nav extends Component {
    render() {
        return  <nav class="header__nav"> 
                    <ul>
                        <li class="header__link login"><a href="#">LOG IN</a></li>
                        <li class="header__link sign"><a href="#">SIGN UP</a></li>
                    </ul> 
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>   
                </nav> 
        }
     
}


//another function 

function Btn() {

  const text = 'Log in';
  const logged = true; //conditions

 return <div class="btn btn_header">
            <a href="#"> {logged?'GET STARTED': text}</a>
        </div>
}

const Logo = () => <a href="#"><img src="logo.png" alt="Food"/></a>;

//another const 
const Header = () => {
    return <header class="header">
              <div class="container">
                  <div class="header__top">
                      <Logo/>
                      <Nav/>
                  </div>
                  <div class="header__content">
                      <h2>Find your Favorite</h2>
                      <h1>RECIPES</h1>
                      <Btn/>
                      <h4>OR SEND US YOUR OWN RECIPES AND GET REWARDED!</h4>
                  </div>
              </div>
          </header>
  }

  function App() {
    return (
      <div>
          <StrictMode>
              <Header/>
          </StrictMode>
      </div>
    );
  }


export default App;

