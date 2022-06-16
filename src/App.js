import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./Pages/Home/Banner/Banner";
import Studium from "./Pages/Home/Studium/Studium";
import Timer from "./Pages/Home/Timer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Timer></Timer>
      <Studium></Studium>
      <Footer></Footer>
    </div>
  );
}

export default App;
