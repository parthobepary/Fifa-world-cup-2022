import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./Pages/Home/Banner/Banner";
import LiveStream from "./Pages/Home/LiveStream/LiveStream";
import Studium from "./Pages/Home/Studium/Studium";
<<<<<<< HEAD
import PointTable from "./Pages/PointTable/PointTable";
=======
import Timer from "./Pages/Home/Timer";
>>>>>>> 1be8a3ae61ed44ac459c596a037dafcd61b21b68

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
<<<<<<< HEAD
      <LiveStream></LiveStream>
      <PointTable></PointTable>
=======
      <Timer></Timer>
>>>>>>> 1be8a3ae61ed44ac459c596a037dafcd61b21b68
      <Studium></Studium>
      <LiveStream></LiveStream>
      <Footer></Footer>
    </div>
  );
}

export default App;
