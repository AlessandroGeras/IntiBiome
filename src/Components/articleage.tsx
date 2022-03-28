import styled from "styled-components";

const ArticleAge = () => {
  return (
    <div>
      <Main>
        <h2>
          whatever your age. whatever your lifestyle. whatever your interests.
        </h2>

        <p>
          Co-created with gynaecologists, our revolutionary products have been
          expertly developed to support your intimate microbiome and pH balance,
          and strengthen overall natural health.
        </p>

        <p>
          As the experts in intimate hygiene, we want to bring discussion about
          intimate wellness care out of the dark and demystify the taboos that
          surround it.
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
    width: 800px;
    margin: 0 auto;
    color: #389cd6;
    font-size: 39px;
    font-family: Trebuchet MS, sans-serif;
    font-weight: bold;
    letter-spacing: 0.2px;
    line-height: 50px;
    padding: 75px 0 35px 0;
  }

  p {
    text-align: center;
    width: 730px;
    margin: 0 auto;
    color: #7b7070;
    font-size: 20px;
    font-family: Trebuchet MS, sans-serif;
    letter-spacing: 0.2px;
    line-height: 28px;
    padding-bottom: 20px;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 880px) {
    margin-bottom: 110px;

    h2 {
      width: 500px;
    }

    p {
      width: 470px;
    }
  }

  @media screen and (max-width: 550px) {
    h2 {
      width: 400px;
      font-size: 31px;
      line-height: 40px;
      padding: 40px 0 35px 0;
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
      width: 260px;
    }

    p {
      width: 260px;
      font-size: 12px;
    }
  }
`;

export default ArticleAge;
