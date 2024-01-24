import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/Pricelist/PriceList";
import Dashbord from "./components/Dashbord/Dashbord";
import PhoneBar from "./components/Phonebar/PhoneBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-purple-700 text-7xl p-12 text-center">
          Best of Gym
        </h1>
        <PriceList />
        <Dashbord />
        <PhoneBar/>
      </div>
    </>
  );
}

export default App;
