import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Main>
        <div className="mainMenuBackground">
          <div className="mainMenu">
            <ul>
              <li className="border">
              {" "}
                <a>contact us</a>
              </li>
              <li id="borderFaq" className="border">
                {" "}
                <a>faq</a>
              </li>
              <li className="border">
                {" "}
                <a>site map</a>
              </li>
              <li className="border">
                {" "}
                <a>privacity policy</a>
              </li>
              <li id="borderCookies" className="border">
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
height: 140px;
background:#389CD6;
padding: 50px 0 50px 0;
margin-top: 80px;
color: white;
font-size: 16px;
font-family: Trebuchet MS, sans-serif;
font-weight: bold;
letter-spacing: 0.20px;
line-height:22px; 

.mainMenuBackground {
width: 100%;
background: #389cd6;
}

.mainMenu {
margin: 0 auto;
margin-top:-15px;
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
padding: 0 32.5px 0 32.5px;
margin: 0;
}

ul li ~ li {
border-left: 2px solid white;
height: 30px;
vertical-align: middle;
}

.Bottom-Container {margin-top:50px;}

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


/*########## Mobile##########*/
  @media screen and (max-width: 1180px) { 
    font-size:16px;

    ul > li {
      padding: 0 25px 0 25px;
      margin: 0;
      }
  }

  @media screen and (max-width: 850px) { 
    ul{display:block;
    text-align:center;
  }

  ul > li{padding:26px;}

  li.border:after{content:"";border-top:2px solid white;margin:26px auto 0 auto;width:20px;display:block;} 

  #borderFaq {margin-top:-26px;}

  #borderCookies {margin-bottom:-13px;}
    
  ul li ~ li {
    border-left:0;
    }

    .mainMenu {
      margin-top:-45px;
      }

      .Bottom-Container{width:100%;margin-top:-50px;}

      .Bottom-Left {
        float:none;
        margin-top:215px;
        width: 100%;
        }

        .Bottom-Right {
          float:none;
          margin-top:-180px;
          width: 100%;
          }

    height: 670px;
`;

export default Footer;
