import styled from "styled-components";

const ArticleHelp = () => {

  return (
    <div>
      <Main>
          <h2>we’re here to help</h2>

          <p>When it comes to caring for our most intimate areas, we’ve lost our connection.</p>

          <p>Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most.</p>

          <p>We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.</p>

      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;
height:350px;

h2{text-align:center;
color: #389CD6;
font-size: 39px;
font-family: Trebuchet MS, sans-serif;
font-weight: bold;
padding:30px 0 10px 0;}

p{text-align:center;
width:35%;
margin:0 auto;
color:#7B7070;
font-size: 20px;
font-family: Trebuchet MS, sans-serif;
padding-bottom:20px;}


`;

export default ArticleHelp;
