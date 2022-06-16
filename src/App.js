import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./Pages/Home/Banner/Banner";
import LiveStream from "./Pages/Home/LiveStream/LiveStream";
import Studium from "./Pages/Home/Studium/Studium";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <LiveStream></LiveStream>
      <Studium></Studium>
      <Footer></Footer>
    </div>
  );
}

export default App;
