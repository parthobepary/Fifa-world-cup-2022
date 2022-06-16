import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./Pages/Home/Banner/Banner";
import LiveStream from "./Pages/Home/LiveStream/LiveStream";
import Studium from "./Pages/Home/Studium/Studium";
import PointTable from "./Pages/PointTable/PointTable";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <LiveStream></LiveStream>
      <PointTable></PointTable>
      <Studium></Studium>
      <Footer></Footer>
    </div>
  );
}

export default App;
