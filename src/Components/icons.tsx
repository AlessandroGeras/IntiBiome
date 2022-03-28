import styled from "styled-components";

const Icons = () => {
  return (
    <div>
      <Main>
        <img src={require("../assets/images/icons.png")} />
      </Main>
    </div>
  );
};

const Main = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;

  img {
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
  }

  @media screen and (max-width: 550px) {
    margin-top: -15px;
  }
`;

export default Icons;
