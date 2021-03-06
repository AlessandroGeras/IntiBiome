import styled from "styled-components";

const ArticleHelp = () => {
  return (
    <div>
      <Main>
        <h2>we’re here to help</h2>

        <p>
          When it comes to caring for our most intimate areas, we’ve lost our
          connection.
        </p>

        <p>
          Embarrassed, unwilling, or unable to communicate with others, we’re
          needlessly neglecting the parts of our bodies that need it most.
        </p>

        <p>
          We’re here to help. Providing you with the expertise, knowledge and
          products you need to feel confident in your personal care.
        </p>
      </Main>
    </div>
  );
};

const Main = styled.div`
  width: 100%;
  height: 350px;

  h2 {
    text-align: center;
    color: #389cd6;
    font-size: 39px;
    font-family: Trebuchet MS, sans-serif;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 50px;
    padding: 30px 0 10px 0;
  }

  p {
    text-align: center;
    width: 515px;
    margin: 0 auto;
    color: #7b7070;
    font-size: 20px;
    font-family: Trebuchet MS, sans-serif;
    letter-spacing: 0.2px;
    line-height: 28px;
    padding-bottom: 20px;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 550px) {
    h2 {
      font-size: 31px;
      line-height: 40px;
      padding: 10px 0 5px 0;
    }

    p {
      font-size: 16px;
      line-height: 22px;
      width: 385px;
    }
  }

  @media screen and (max-width: 400px) {
    h2 {
      font-size: 26px;
    }

    p {
      width: 260px;
      font-size: 12px;
    }
  }
`;

export default ArticleHelp;
