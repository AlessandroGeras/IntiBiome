import styled from "styled-components";

const Discoveries = () => {
  return (
    <div>
      <Main>
        <h2>keep up to date with our discoveries</h2>

        <div className="Flexbox">
          <div className="ImageBox">
            <img src={require("../assets/images/discoveries1.png")} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>            
          </div>

          <div className="ImageBox">
            <img src={require("../assets/images/discoveries2.png")} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="ImageBox">
            <img src={require("../assets/images/discoveries3.png")} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

      <div className="ButtonContainer">
        <Button>
        <a>see more</a>
      </Button>
      </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;
padding-bottom:500px;

h2 {
text-align: center;
color: #389cd6;
font-size: 39px;
font-family: Trebuchet MS, sans-serif;
font-weight: bold;
padding: 80px 0 50px 0;
}

p {
text-align: center;
margin: 0 auto;
color: #7b7070;
font-size: 20px;
font-family: Trebuchet MS, sans-serif;
padding:20px 40px 40px 0;
}

.Flexbox {
display: flex;
width: 1150px;
margin: 0 auto;
}

.ImageBox {
margin: 0 auto;
width: 357px;
box-shadow: 0 0 20px 1px #ddd;
border-radius: 15px;
}

img {
display: flex;
margin: 0 auto;
}

.ButtonContainer{width:100%;
display:flex;
padding-top:50px;}
`;

const Button = styled.button`
margin:0 auto;
background-color: #1899D6;
border: solid transparent;
border-radius: 16px;
border-width: 0 0 4px;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-family: Trebuchet MS, sans-serif;
font-size: 20px;
font-weight: bold;
margin-top:30px;
margin-bottom:25px;
outline: none;
overflow: visible;
padding: 20px 6px;
text-align: center;
touch-action: manipulation;
transform: translateZ(0);
transition: filter .2s;
user-select: none;
-webkit-user-select: none;
vertical-align: middle;
white-space: nowrap;
width: 325px;

&:after {background-clip: padding-box;
background-color: #1CB0F6;
border: solid transparent;
border-radius: 16px;
border-width: 0 0 4px;
bottom: -4px;
content: "";
left: 0;
position: absolute;
right: 0;
top: 0;
z-index: -1;}

:hover:not(:disabled) {
filter: brightness(1.1);
}

a {text-decoration:none}

a:visited{color:white}
`;




export default Discoveries;
