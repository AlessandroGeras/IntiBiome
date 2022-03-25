import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";

const Navbar = () => {

  var Time:NodeJS.Timeout;

  const [producsActive, producsActiveSet] = useState(false);  

  const productsMenuActive = () => {
    producsActiveSet(true);
    clearTimeout(Time);
  };

  const productsMenuDisable = () => {
    Time = setTimeout(() => {
        producsActiveSet(false)}, 500);
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
                  <a>
                    about us <IoIosArrowDown />
                  </a>
                </li>
                <li>
                  {" "}
                  <a onMouseEnter={productsMenuActive} onMouseLeave={productsMenuDisable}>
                    our producs <IoIosArrowDown />
                  </a>
                </li>
                <li>
                  {" "}
                  <a>
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
            producsActive === true
              ? "productsBackGroundActive"
              : "productsBackGroundDisabled"
          } onMouseEnter={productsMenuActive} onMouseLeave={productsMenuDisable}
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

  .productsBackGroundActive {
      visibility:visible;
    width: 100%;
    background: #7b7070;
    max-height: 1;
    transition: max-height 1 ease;
  }  

  .productsBackGroundDisabled {
      visibility:hidden;
    max-height: 0;
    transition: max-height 1 ease;
  } 
  
  .products {
    width: 65%;
    margin: 0 auto;
    margin-left: 0;
  }
`;

export default Navbar;
