//import React from 'react'; or 
import { Component, StrictMode} from 'react';  //  destruct sintax
import './App.css';


const Header = () => {
  return <h2>Hello world</h2>
}


/* const Field = () => {
  const holder = 'Enter here';
  const styleField = {
    width: '300px'
  }
  return <input     
            placeholder= {holder} 
            type="text" 
            style = {styleField}
         />
} */


//using another sintax
class Field extends Component {
    render() {
        const holder = 'Enter here';
        const styleField = {
            width: '300px'
            };
        return <input     
        placeholder= {holder} 
        type="text" 
        style = {styleField}
     />
        }
     
}

function Btn() {

  const text = 'Log in';
  const logged = true;
 /*  const result = () => {
     return <p>Log in</p>
  } */
 return <button>{logged?'Enter': text}</button>
}

function App() {
  return (
    <div className="App">
        <StrictMode>
            <Header/>
        </StrictMode>
        <Field/>
        <Btn/>
    </div>
  );
}

export default App;

