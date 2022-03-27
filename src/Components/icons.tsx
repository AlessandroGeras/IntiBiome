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
margin-top:30px;

img {
    margin:0 auto;
    max-height:100%; max-width:100%;
}
`;

export default Icons;
