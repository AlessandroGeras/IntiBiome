import styled from "styled-components";

const Products = () => {
  return (
    <div>
      <Main>
        <h2>our products</h2>

        <div className="Flexbox">
          <div className="ImageBox">
            <img src={require("../assets/images/blue.png")} />
            <p>intibiome wellness daily intimate wash</p>
            <div className="wellness">wellness</div>
          </div>

          <div className="ImageBox">
            <img src={require("../assets/images/green.png")} />
            <p>intibiome wellness daily intimate wash</p>
            <div className="active">active</div>
          </div>

          <div className="ImageBox">
            <img src={require("../assets/images/pink.png")} />
            <p>intibiome wellness daily intimate wash</p>
            <div className="agecare">agecare</div>
          </div>
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
padding: 30px 0 10px 0;
}

p {
text-align: center;
width: 80%;
margin: 0 auto;
color: #7b7070;
font-size: 20px;
font-family: Trebuchet MS, sans-serif;
padding-bottom: 20px;
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

.wellness,
.active,
.agecare {
color: white;
text-align: center;
font-size: 25px;
font-family: Trebuchet MS, sans-serif;
font-weight: bold;
border-radius: 0 0 15px 15px;
padding: 15px 0 15px 0;
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
`;

export default Products;
