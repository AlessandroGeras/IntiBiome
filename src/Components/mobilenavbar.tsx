import { useState } from "react";
import styled from "styled-components";

interface Props {
    value: boolean;
  }

const MobileNavbar = ({value}: Props) => {

  return (
    <div>
      <Main>
         <div id="Background" className={value===true ? "mobileMenuActive" : "mobileMenuDisabled"}>

         </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;

#Background{width:100%;
background:red;
position:absolute;
width:100%;
height:500px;

}

.mobileMenuActive{visibility:visible;
transform:  translate(0%,0%);
transition:1s;}

.mobileMenuDisabled{visibility:hidden;
transform:  translate(-100%,0%);
transition:1s;}

`;

export default MobileNavbar;
