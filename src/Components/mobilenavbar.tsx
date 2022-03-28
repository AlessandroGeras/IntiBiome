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
           <div>
             <ul>
               <li>brand philosophy</li>
               <li>product technology</li>
               <li>all products</li>
               <li>intibiome wellness</li>
               <li>intibiome active</li>
               <li>intibiome agecare</li>
               <li>article 1</li>
               <li>article 2</li>
               <li>article 3</li>
               <li>faq</li>
               <li>contact us</li>
             </ul>
           </div>

         </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
width: 100%;

#Background{width:100%;
background:#389CD6;
position:absolute;
width:100%;
height:600px;

}

.mobileMenuActive{visibility:visible;
transform:  translate(0%,0%);
transition:1s;}

.mobileMenuDisabled{visibility:hidden;
transform:  translate(-100%,0%);
transition:1s;}

ul{list-style-type: none;
  font-size: 16px;
  font-family: Trebuchet MS, sans-serif;
  font-weight: bold;
  letter-spacing: 0.20px;
  line-height:22px;
color:white;}

ul > li{padding:15px;margin-left:-40px;padding-left:40px;}

li:hover{background:#1cb0f6;
cursor:pointer;}

`;

export default MobileNavbar;
