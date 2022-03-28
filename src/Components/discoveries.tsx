import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discoveries = () => {

  const settings = {    
    centerMode: true, 
speed: 500,
infinite: false,
slidesToScroll: 2,

responsive: [ 
  {
    breakpoint: 2000,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      centerPadding:"12%",
    }
  }, 
]
  };

  return (
    <div>
      <Main>
        <h2>keep up to date with our discoveries</h2>

        <div className="SliderContainer">
          <Slider {...settings}>
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
          </Slider>
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

h2 {
text-align: center;
color: #389cd6;
font-size: 39px;
font-family: Trebuchet MS, sans-serif;
font-weight: bold;
letter-spacing: 0.20px;
line-height:50px;
padding: 80px 0 50px 0;
}

p {
text-align: center;
margin: 0 auto;
color: #7b7070;
font-size: 20px;
font-family: Trebuchet MS, sans-serif;
letter-spacing: 0.20px;
line-height:28px;
padding:20px 40px 40px 0;
}

.ImageBox {
margin: 0 auto;
box-shadow: 0 0 20px 1px #ddd;
border-radius: 15px;
}

img {width:100%;
display: flex;
margin: 0 auto;
}

.ButtonContainer{width:100%;
display:flex;
padding-top:5px;}

.SliderContainer {
  width: 1150px;
  margin: 0 auto;  
}  

.slick-list {margin: 0 -5px;
  padding:5px 0 5px 0;}

.slick-slide>div {padding: 0 15px;}


/*########## Mobile##########*/
  @media screen and (max-width: 1180px) { 
    .SliderContainer {
    width: 850px;
    }

    p{font-size: 15px;padding:15px 20px 35px 0;}
  }

  @media screen and (max-width: 880px) { 
    .SliderContainer {
    width: 675px;
    }

    p{font-size: 11px;
    padding:10px 0px 30px 0px;
    margin-left:-5px;
    width:100%;
    line-height:20px;}
  }

  @media screen and (max-width: 700px) { 
    .SliderContainer {
    width: 100%;
    padding:5px 0 5px 0;
    overflow:hidden;
    }
    
    h2{font-size: 31px;
      line-height:40px;
      padding: 7.5px 0 7.5px 0;}

    p{width:70%;font-size:20px;padding-bottom:60px;}  
  } 

  @media screen and (max-width: 588px) { 
    p{width:90%}
  }

  @media screen and (max-width: 450px) { 
    p{width:90%;margin-left:10px;}
  }
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
letter-spacing: 0.20px;
line-height:28px;
text-transform: lowercase;
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
