import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const settings = {
    centerMode: true,
    speed: 500,
    infinite: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerPadding: "14%",
        },
      },
    ],
  };

  return (
    <div>
      <Main>
        <h2>our products</h2>

        <div className="SliderContainer">
          <Slider {...settings}>
            <div className="ImageBox">
              <img src={require("../assets/images/blue.png")} />
              <p className="productone">
                intibiome wellness daily intimate wash
              </p>
              <div className="wellness">wellness</div>
            </div>
            <div className="ImageBox">
              <img src={require("../assets/images/green.png")} />
              <p className="producttwo">
                intibiome active extra protection intimate wash
              </p>
              <div className="active">active</div>
            </div>
            <div className="ImageBox">
              <img src={require("../assets/images/pink.png")} />
              <p>intibiome agecare dryness relief intimate wash</p>
              <div className="agecare">agecare</div>
            </div>
          </Slider>
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
    padding: 90px 0 40px 0;
  }

  p {
    text-align: center;
    width: 90%;
    margin: 0 auto;
    color: #7b7070;
    font-size: 20px;
    font-family: Trebuchet MS, sans-serif;
    letter-spacing: 0.20px;
    line-height:28px; 
    padding-bottom: 30px;
  }

  .producttwo{width:95%}

  .SliderContainer {
    width: 1150px;
    margin: 0 auto;
  }  

  .ImageBox {
    box-shadow: 0 0 10px 1px #ddd;
    border-radius: 15px;
  }

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom:30px;
  }

  .wellness,
  .active,
  .agecare {
    color: white;
    text-align: center;
    font-size: 25px;
    font-family: Trebuchet MS, sans-serif;
    font-weight: bold;
    letter-spacing: 0.20px;
    line-height:36px; 
    text-transform: lowercase;
    border-radius: 0 0 15px 15px;
    padding: 15px 0 20px 0;
  }

  .wellness {
    background: #389cd6;
  }

  .active {
    background: #309d5f;
  }

  .agecare {
    background: #ee6381;
  }

  .slick-list {margin: 0 -5px;
  padding:5px 0 5px 0;}

.slick-slide>div {padding: 0 15px;}


/*########## Mobile##########*/
  @media screen and (max-width: 1180px) { 
    .SliderContainer {
    width: 850px;
    }   

    p{width:200px;}  

    .productone{width:80%;}
  }

  @media screen and (max-width: 880px) { 
    .SliderContainer {
    width: 675px;
    }

    p{width:165px;font-size:17px;}  
  }

  @media screen and (max-width: 700px) { 
    .SliderContainer {
    width: 100%;
    overflow:hidden;
    }

    p{width:90%;font-size:20px;}  

    .productone{width:75%}

    .producttwo{width:80%}
  }

    @media screen and (max-width: 550px) { 
      h2 {font-size: 31px;
        line-height:40px;
        padding:0px 0 10px 0;
        margin-top:-15px;
      }   
      
      @media screen and (max-width: 450px) { 
        .producttwo{width:100%;} 
  }

  @media screen and (max-width: 400px) { 
    h2{ margin-top:140px;}

    p{width:100%;} 

    .producttwo{width:95%;}
}

@media screen and (max-width: 280px) { 

  p{font-size:14px} 
}
`;

export default Products;
