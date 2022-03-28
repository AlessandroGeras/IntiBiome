import styled from "styled-components";

const MidBanner = () => {
  return (
    <div>
      <Main>
        <img id="midbanner" src={require("../assets/images/midbanner.png")} />
        <img
          id="midbanner_mobile"
          src={require("../assets/images/midbanner_mobile.png")}
        />
      </Main>
    </div>
  );
};

const Main = styled.div`
  width: 100%;
  padding-top: 120px;

  #midbanner {
    display: initial;
    max-height: 100%;
    max-width: 100%;
  }

  #midbanner_mobile {
    display: none;
    width: 100%;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 700px) {
    padding-top: 60px;
  }

  @media screen and (max-width: 550px) {
    #midbanner {
      display: none;
    }

    #midbanner_mobile {
      display: initial;
    }

    padding-top: 65px;
  }
`;

export default MidBanner;
