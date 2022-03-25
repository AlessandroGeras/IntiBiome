import styled from "styled-components";

const ArticleAge = () => {

  return (
    <div>
      <Main>
          <h2>whatever your age. whatever your lifestyle. whatever your interests.</h2>

          <p>Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.</p>

          <p>As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.</p>

      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;
height:350px;

h2{text-align:center;
width:45%;
margin:0 auto;
color: #389CD6;
font-size: 39px;
font-family: Trebuchet MS, sans-serif;
font-weight: bold;
padding:45px 0 35px 0;}

p{text-align:center;
width:50%;
margin:0 auto;
color:#7B7070;
font-size: 20px;
font-family: Trebuchet MS, sans-serif;
padding-bottom:20px;}


`;

export default ArticleAge;
