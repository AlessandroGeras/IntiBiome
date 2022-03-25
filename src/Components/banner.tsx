import styled from "styled-components";

const Banner = () => {

  return (
    <div>
      <Main>
          <img src={require("../assets/images/banner.png")} />
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;

img {
    max-height:100%; max-width:100%;
}
`;

export default Banner;
