import styled from "styled-components";

const Discoveries = () => {
  return (
    <div>
      <Main>
        <h2>keep up to date with our discoveries</h2>

        <div className="Flexbox">
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
        </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;
padding-bottom:500px;

h2 {
text-align: center;
color: #389cd6;
font-size: 39px;
font-family: Trebuchet MS, sans-serif;
font-weight: bold;
padding: 80px 0 50px 0;
}

p {
text-align: center;
margin: 0 auto;
color: #7b7070;
font-size: 20px;
font-family: Trebuchet MS, sans-serif;
padding:20px 40px 40px 0;
}

.Flexbox {
display: flex;
width: 1150px;
margin: 0 auto;
}

.ImageBox {
margin: 0 auto;
width: 357px;
box-shadow: 0 0 20px 1px #ddd;
border-radius: 15px;
}

img {
display: flex;
margin: 0 auto;
}
`;

export default Discoveries;
