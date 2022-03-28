import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";

const Navbar = () => {
  var Time: NodeJS.Timeout;

  const [productsActive, producsActiveSet] = useState(false);
  const [aboutActive, aboutActiveSet] = useState(false);
  const [healthActive, healthActiveSet] = useState(false);

  const productsMenuActive = () => {
    producsActiveSet(true);
    aboutActiveSet(false);
    healthActiveSet(false);
    clearTimeout(Time);
  };

  const productsMenuDisable = () => {
    Time = setTimeout(() => {
      producsActiveSet(false);
    }, 500);
  };

  const aboutMenuActive = () => {
    aboutActiveSet(true);
    producsActiveSet(false);
    healthActiveSet(false);
    clearTimeout(Time);
  };

  const aboutMenuDisable = () => {
    Time = setTimeout(() => {
      aboutActiveSet(false);
    }, 500);
  };

  const healthMenuActive = () => {
    healthActiveSet(true);
    producsActiveSet(false);
    aboutActiveSet(false);
    clearTimeout(Time);
  };

  const healthMenuDisable = () => {
    Time = setTimeout(() => {
      healthActiveSet(false);
    }, 500);
  };

  return (
    <div>
      <Main>
        <div className="mainMenuBackground">
          <div className="mainMenu">
            <IconContext.Provider
              value={{
                size: "25px",
                style: { verticalAlign: "middle", color: "white" },
              }}
            >
              <ul>
                <li>
                  <a
                    onMouseEnter={aboutMenuActive}
                    onMouseLeave={aboutMenuDisable}
                  >
                    about us <IoIosArrowDown />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    onMouseEnter={productsMenuActive}
                    onMouseLeave={productsMenuDisable}
                  >
                    our products <IoIosArrowDown />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    onMouseEnter={healthMenuActive}
                    onMouseLeave={healthMenuDisable}
                  >
                    intimate health <IoIosArrowDown />
                  </a>
                </li>
                <li>
                  {" "}
                  <a>contact us</a>
                </li>
              </ul>
            </IconContext.Provider>
          </div>
        </div>

        <div
          className={
            productsActive === true
              ? "productsBackGroundActive"
              : "productsBackGroundDisabled"
          }
          onMouseEnter={productsMenuActive}
          onMouseLeave={productsMenuDisable}
        >
          <ul className="products">
            <li>
              <a>all products</a>
            </li>
            <li>
              {" "}
              <a>intibiome wellness</a>
            </li>
            <li>
              {" "}
              <a>intibiome active</a>
            </li>
            <li>
              {" "}
              <a>intibiome agecare</a>
            </li>
          </ul>
        </div>

        <div
          className={
            aboutActive === true
              ? "aboutBackGroundActive"
              : "aboutBackGroundDisabled"
          }
          onMouseEnter={aboutMenuActive}
          onMouseLeave={aboutMenuDisable}
        >
          <ul className="about">
            <li>
              <a>brand philosophy</a>
            </li>
            <li>
              {" "}
              <a>product technology</a>
            </li>
          </ul>
        </div>

        <div
          className={
            healthActive === true
              ? "healthBackGroundActive"
              : "healthBackGroundDisabled"
          }
          onMouseEnter={healthMenuActive}
          onMouseLeave={healthMenuDisable}
        >
          <ul className="health">
            <li>
              <a>article 1</a>
            </li>
            <li>
              {" "}
              <a>article 2</a>
            </li>
            <li>
              {" "}
              <a>article 3</a>
            </li>
            <li>
              {" "}
              <a>faq</a>
            </li>
          </ul>
        </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
  width: 100%;
  color: white;
  font-size: 16px;
  font-family: Trebuchet MS, sans-serif;
  font-weight: bold;
  letter-spacing: 0.2px;
  line-height: 22px;
  display: initial;

  .mainMenuBackground {
    width: 100%;
    background: #389cd6;
  }

  .manMenu {
    width: 65%;
    margin: 0 auto;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0 auto;
    margin-top: 5px;
    padding: 10px;
  }

  ul > li {
    padding: 0 40px 0 40px;
    margin: 0;
  }

  .productsBackGroundActive,
  .aboutBackGroundActive,
  .healthBackGroundActive {
    position: absolute;
    visibility: visible;
    width: 100%;
    background: #7b7070;
    max-height: 1;
    transition: max-height 1 ease;
  }

  .productsBackGroundDisabled,
  .aboutBackGroundDisabled,
  .healthBackGroundDisabled {
    visibility: hidden;
    max-height: 0;
    transition: max-height 1 ease;
  }

  .products,
  .about,
  .health {
    width: 65%;
    margin: 0 auto;
  }

  .products {
    margin-left: 0;
  }

  .about,
  .health {
    margin-left: -150px;
  }

  /*########## Mobile##########*/
  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

export default Navbar;
