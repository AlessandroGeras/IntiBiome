import { useState } from "react";
import styled from "styled-components";
import MobileNavbar from "./mobilenavbar";

const Header = () => {
  const [inputActive, inputActiveSetValue] = useState(false);
  const [inputValue, inputValueSet] = useState("Find a product");
  const [openMenu, openMenuSet] = useState(false);

  const activeSearch = () => {
    inputActiveSetValue(!inputActive);
  };

  const inputFocus = () => {
    inputValueSet("");
  };

  const activeMenu = () => {
    openMenuSet(!openMenu);
  };

  return (
    <div>
      <Main>
        <div className="Menu">    
        <div id="UnicodeOpenMenu" className={openMenu === true ? "hideUnicode" : "showUnicode"} onClick={activeMenu}>&#9776;</div>
        <div id="UnicodeCloseMenu" className={openMenu === true ? "showUnicode" : "hideUnicode"} onClick={activeMenu}>&#10005;</div>      
        </div>
        <div className="logo">
          <img src={require("../assets/images/logo.png")} />
        </div>
        <div id="search" className={inputActive === true ? "searchActive" : "searchDisabled"}>
          <a onClick={activeSearch}>
            <img
              id="search_icon"
              src={require("../assets/images/search.png")}
            />
          </a>
          <input
            className={inputActive === true ? "inputActive" : "inputDisabled"}
            placeholder={inputValue}
            onFocus={inputFocus}
          />
        </div>
      </Main>      
      <MobileNavbar value={openMenu}/>
    </div>
  );
};

const Main = styled.div`
width: 100%;
display: block; 
padding-top:0.25%;
overflow: auto;

.Menu{  
width: 17%;
float: left;
margin-top:20px;
font-size:25px;
visibility:hidden;
}

#UnicodeOpenMenu,#UnicodeCloseMenu{width:15px;
margin:0 0 0 auto;}

#UnicodeOpenMenu:hover{cursor:pointer}

#UnicodeCloseMenu:hover{cursor:pointer}

.showUnicode{display:flex;}

.hideUnicode{display:none}

.logo {
width: 66%;
margin: 0 auto;
float: left;
}

.logo >  img {
display: block;
margin: 0 auto;
}

.searchActive,.searchDisabled{width:17%}

#search {
float: right;
display:flex;
margin-top:25px;
}

#search > a :hover{cursor:pointer}

#search > input {
background:#389CD6;
color:white;
width:0px;
margin-left:-20px;
padding:0;
border:0;
font-size:14px;
text-align: center;
border-radius: 40px;
transform:  translate(-100%,0%);
transition:1s;}
}

$search > input::placeholder {
color: white;
opacity: 0.5;
}

#search > .inputActive {
  width:140px
}

#search > .inputDisabled {
  width:0px
}


/*########## Mobile##########*/
  @media screen and (max-width: 1260px) {
    .Menu{visibility:visible;}
  }

  @media screen and (max-width: 850px) {
    .searchActive{width:5%}
  }
`;

export default Header;
