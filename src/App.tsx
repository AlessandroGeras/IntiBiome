import ArticleAge from "./Components/articleage";
import ArticleHelp from "./Components/articlehelp";
import Banner from "./Components/banner";
import Discoveries from "./Components/discoveries";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Icons from "./Components/icons";
import MidBanner from "./Components/midbanner";
import Navbar from "./Components/navbar";
import Products from "./Components/products";


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <ArticleHelp />
      <Icons />
      <ArticleAge />
      <Products />
      <MidBanner />
      <Discoveries />
      <Footer />
    </div>
  );
};



export default App;
