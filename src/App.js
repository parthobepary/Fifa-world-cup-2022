import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./Pages/Home/Banner/Banner";
import PointTable from "./Pages/PointTable/PointTable";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      {/* <LiveStream></LiveStream> */}
      <PointTable></PointTable>
      {/* <Studium></Studium> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
