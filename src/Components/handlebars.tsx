import Handlebars from "handlebars/dist/cjs/handlebars"
import styled from "styled-components";


const Handlebar = () => {

    const hbr = `
    <ul class="people_list">
    {{#each people}}
      <li>{{foda this}}</li>
    {{/each}}
  </ul>
`;

const template = Handlebars.compile(hbr);

Handlebars.registerHelper('foda', function (aString:Handlebars) {
    return aString.toUpperCase()
})


  const data = {
    people: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
      ],
  };
  return ( 
    <div>
        <Teste>
      <div dangerouslySetInnerHTML={{ __html: template(data) }} />
      </Teste>
    </div>
  );
}

const Teste = styled.div`
ul{list-style-type: none;}
`;

export default Handlebar;