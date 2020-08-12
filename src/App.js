import React from 'react';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Slideview from './Slideview.js'
import BottomSlide from './BottomSlide.js'



function App() {
  return (
    <div className="App">
        {/* header */}
            <div className="header">
                 <MenuIcon className="header__menu"/>
                    <div>
                       <input className="header__search" placeholder="Search"/>
                      <SearchIcon/>
                   </div>
        
            </div>
        {/* slideshow */}
              <div class="slider">
                    <Slideview/>
                </div>

         {/* cards */}

              <BottomSlide/>
      </div>
  );
}

export default App;
