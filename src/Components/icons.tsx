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
display:flex;

img {
    margin:0 auto;
}
`;

export default Icons;
