import styled from "styled-components";

const MidBanner = () => {

  return (
    <div>
      <Main>
          <img src={require("../assets/images/midbanner.png")} />
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;
padding-top:120px;

img {
    max-height:100%; max-width:100%;
}


`;

export default MidBanner;
