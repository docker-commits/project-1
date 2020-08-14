import React from 'react';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Slideview from './Slideview.js';
import BottomSlide from './BottomSlide.js';



function App() {
  return (
    <div className="App">
        {/* header */}
            <div className="header">
              <div className="header__menu">
                  <MenuIcon  color="action" fontSize="large"/>
              </div>

                    <div>
                       <input className="header__search" placeholder="Search"/>
                      <SearchIcon fontSize="large" />
                   </div>
        
            </div>
        {/* slideshow */}
              <div class="slider">
                    <Slideview/>
                </div>

         {/* cards */}
            {/* <Card class="bottom__cards"> 
              <CardContent>
                  
              </CardContent>
              

            </Card> */}
            <div className="bottom__cards">
            <BottomSlide/>
            </div>
            
      </div>
  );
}

export default App;
