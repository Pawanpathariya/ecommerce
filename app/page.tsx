import Header from "./component/Topbar";
import TopCards from "./section/topcard";
import Carusol from "./section/Carusol";
import Favourite from "./section/favourite";
import Joy from "./section/joy";
import Delivery from "./section/Delivery";
import Mainban from "./section/Mainban";
import Send from "./section/Send";
import Little from "./section/Little";
import Footer from "./component/Footer";
import News from "./section/News";
import Cont from "./section/Cont";
import StatsSection from "./section/FirtFoot";
import Top from "./section/Top";
import Cele from "./section/Cele";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <TopCards/>
      <Top />
      <Carusol />
      <Favourite />
      <Joy />
      <Delivery />
      <Mainban />
      <Send />
      <Little />
      <Cele />
      {/* <Cont /> */}
      <News />
      <StatsSection />
      <Footer />
    </>
  );
};

export default Home;

