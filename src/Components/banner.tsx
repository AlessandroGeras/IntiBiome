import styled from "styled-components";

const Banner = () => {

  return (
    <div>
      <Main>
          <img id="banner" src={require("../assets/images/banner.png")} />
          <img id="banner_mobile" src={require("../assets/images/banner_mobile.png")} />
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;

#banner{display:initial;
max-height:100%;
max-width:100%;}

#banner_mobile{display:none;
width:100%;}


/*########## Mobile##########*/
  @media screen and (max-width: 550px) { 
   #banner{display:none}  

   #banner_mobile{display:initial}
  }
`;

export default Banner;
