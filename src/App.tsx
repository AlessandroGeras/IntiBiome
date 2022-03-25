import ArticleAge from "./Components/articleage";
import ArticleHelp from "./Components/articlehelp";
import Banner from "./Components/banner";
import Header from "./Components/header";
import Icons from "./Components/icons";
import Navbar from "./Components/navbar";


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <ArticleHelp />
      <Icons />
      <ArticleAge />
    </div>
  );
};



export default App;
