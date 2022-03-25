import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [inputActive, inputActiveSetValue] = useState(false);
  const [inputValue, inputValueSet] = useState("Find a product");

  const onclick = () => {
    inputActiveSetValue(!inputActive);
  };

  const onfocus = () => {
    inputValueSet("");
  };

  return (
    <div>
      <Main>
        <div className="logo">
          <img src={require("../assets/images/logo.png")} />
        </div>
        <div className="search">
          <a onClick={onclick}>
            <img
              id="search_icon"
              src={require("../assets/images/search.png")}
            />
          </a>
          <input
            className={inputActive === true ? "inputActive" : "inputDisabled"}
            placeholder={inputValue}
            onFocus={onfocus}
          />
        </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;
display: block; 
padding-top:0.25%;
overflow: auto;

.logo {
width: 66vw;
margin: 0 auto;
float: left;
margin-left: 17vw;
}

.logo >  img {
width: 150px;
display: block;
margin: 0 auto;
}

.search {
width: 17vw;
float: right;
display:flex;
margin-top:-40px;
}

.search > img {
width: 25px;
}

.search > input {
background:#389CD6;
color:white;
width:0px;
margin-left:-30px;
padding:0;
border:0;
font-size:14px;
text-align: center;
border-radius: 40px;
transform:  translate(-100%,0%);
transition:1s;}
}

.search > input::placeholder {
color: white;
opacity: 0.5;
}

.search > .inputActive {
  width:240px
}

.search > .inputDisabled {
  width:0px
}
`;

export default Header;
