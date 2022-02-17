import React from 'react';
import './App.css';
import titleimg from './img/titleimg.png'
import Header from './Header';
import Main from './Main';



function App() {

  return (
   <div>
        <div class="title">
    <div><img class="Titleimg"src={titleimg} alt="titleimg"/></div>    
  </div>
      <Header/>
      <Main/>
    </div>

  );
}

export default App;