import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Main>
        <div className="mainMenuBackground">
          <div className="mainMenu">
            <ul>
              <li>
                <a>contact us</a>
              </li>
              <li>
                {" "}
                <a>faq</a>
              </li>
              <li>
                {" "}
                <a>site map</a>
              </li>
              <li>
                {" "}
                <a>privacity policy</a>
              </li>
              <li>
                {" "}
                <a>cookies policy</a>
              </li>
              <li>
                {" "}
                <a>legal notice</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Bottom-Container">
        <div className="Bottom-Left">
          <img src={require("../assets/images/ulabs.png")} />
        </div>

        <div className="Bottom-Right">
            <img src={require("../assets/images/instagram.png")} />
        </div>
        </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;
height: 120px;
background:#389CD6;
padding: 50px 0 50px 0;
margin-top: 100px;
color: white;
font-size: 16px;
font-family: Trebuchet MS, sans-serif;
font-weight: bold;

.mainMenuBackground {
width: 100%;
background: #389cd6;
}

.manMenu {
width: 65%;
margin: 0 auto;
}

ul {
line-height: 1.6;
display: flex;
justify-content: center;
list-style-type: none;
margin: 0 auto;
margin-top: 5px;
padding: 10px;
}

ul > li {
padding: 0 40px 0 40px;
margin: 0;
}

ul li ~ li {
border-left: 2px solid white;
height: 30px;
vertical-align: middle;
}

.Bottom-Container {margin-top:30px;}

.Bottom-Left {
width: 30%;
float: left;
}
    
.Bottom-Left >  img {
display: block;
margin: 0 auto;
}
    
.Bottom-Right {
width: 30%;
float: right;
}
    
.Bottom-Right > img {
display: block;
margin: 0 auto;
}
`;

export default Footer;