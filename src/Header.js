import React from 'react';
import './styles/Header.css';


function Header() {
  return (
    <div id="ucfhb" class=" preload" role="complementary" aria-label="University of Central Florida navbar">
        <div id="ucfhb-inner" >
            <div id="ucfhb-left">
                <div id="ucfhb-logo">
                    <a href="https://www.ucf.edu">University of Central Florida</a>
                </div> 
            </div>

            <div id="ucfhb-right">
                <div id="ucfhb-signon">    
                        <div id="ucfhb-services">
                            <div>
                                <a id="ucfhb-myucf" class="ucfhb-service" href="https://my.ucf.edu/psp/IHPROD/EMPLOYEE/EMPL/?cmd=login">myUCF</a>
                                <a id="ucfhb-knightsmail" class="ucfhb-service" href="http://knightsemail.ucf.edu">KnightsMail</a>
                                <a id="ucfhb-webcourses" class="ucfhb-service" href="https://webcourses.ucf.edu">Webcourses</a>
                            </div>  
                        </div>
                </div>
            </div>
                    <ul 
                        id="ucfhb-search-autocomplete" aria-label="Select a suggestion" role="listbox">
                    </ul>
        </div>
    </div>
  );
}

export default Header;
